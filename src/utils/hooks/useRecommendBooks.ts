import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooksTotalPages } from '../../redux/books/selectors';
import { getRecommendBooks } from '../../redux/books/operations';
import { AppDispatch } from '../../redux/store';
import { selectFilter } from '../../redux/filter/selectors';

const useRecommendBooks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalPages = useSelector(selectBooksTotalPages);
  const { title, author } = useSelector(selectFilter);
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth >= 1440) {
        setLimit(10);
      } else if (window.innerWidth >= 768) {
        setLimit(8);
      } else {
        setLimit(2);
      }
    };

    updateLimit(); // виклик при першому рендері
    window.addEventListener('resize', updateLimit);

    return () => window.removeEventListener('resize', updateLimit);
  }, []);
  useEffect(() => {
    dispatch(
      getRecommendBooks({
        title: title?.trim(),
        author: author?.trim(),
        page,
        limit,
      }),
    );
  }, [dispatch, page, limit, title, author]);
  const nextPage = () => {
    if (typeof totalPages === 'number' && page < totalPages)
      setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return { limit, page, setPage, nextPage, prevPage, totalPages };
};
export default useRecommendBooks;

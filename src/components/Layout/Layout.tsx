import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import {
  selectModalStatus,
  selectModalType,
} from '../../redux/modal/selectors';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import Modal from '../shared/Modal/Modal';
import MenuContent from '../MenuContent/MenuContent';
import BookContent from '../BookContent/BookContent';
import BookSuccessAddContent from '../BookSuccessAddContent/BookSuccessAddContent';

const Layout: React.FC = () => {
  const modalOpen = useSelector(selectModalStatus);
  const currentModalType = useSelector(selectModalType);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const checkCurrentModalType = useCallback(() => {
    if (!currentModalType) return null;

    switch (currentModalType) {
      case 'menu':
        return <MenuContent />;
      case 'book':
        return <BookContent />;
      case 'book added':
        return <BookSuccessAddContent />;
      default:
        return null;
    }
  }, [currentModalType]);
  useEffect(() => {
    if (modalOpen) {
      setModalContent(checkCurrentModalType());
    } else {
      setModalContent(null);
    }
  }, [checkCurrentModalType, modalOpen]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {modalOpen && currentModalType && <Modal>{modalContent}</Modal>}
    </>
  );
};

export default Layout;

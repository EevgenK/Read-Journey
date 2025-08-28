import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        {/* <Route path="/" element={<Layout />}></Route> */}
      </Routes>
    </Suspense>
  );
};

export default App;

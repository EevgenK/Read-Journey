import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        {/* <Route path="/" element={<Layout />}></Route> */}
      </Routes>
    </Suspense>
  );
};

export default App;

import { Suspense, lazy } from 'react';
import { Loader } from '@fjlaubscher/matter';
import { Routes, Route } from 'react-router-dom';

const Post = lazy(() => import('./pages/post'));
const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/not-found'));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/:category/:slug" element={<Post />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

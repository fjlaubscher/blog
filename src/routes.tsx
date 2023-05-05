import { Suspense, lazy } from 'react';
import { Loader } from '@fjlaubscher/matter';
import { Routes, Route } from 'react-router-dom';

const Category = lazy(() => import('./pages/category'));
const Post = lazy(() => import('./pages/post'));
const Showcase = lazy(() => import('./pages/showcase'));
const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/not-found'));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/showcase/:slug" element={<Showcase />} />
      <Route path="/:category/:slug" element={<Post />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

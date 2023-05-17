import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Routes from './routes';

import './global.scss';

const isProduction = window.location.host === 'blog.francoislaubscher.dev';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
      <Analytics mode={isProduction ? 'production' : 'development'} />
    </BrowserRouter>
  </React.StrictMode>
);

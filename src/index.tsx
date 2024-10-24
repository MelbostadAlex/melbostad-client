import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './routes/Landing';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import Shop from './routes/Shop';
import Product from './routes/Product';
import FAQ from './routes/FAQ';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/faq",
    element: <FAQ />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },

  {
    path: "/products/:productId/show",
    element: <Product />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

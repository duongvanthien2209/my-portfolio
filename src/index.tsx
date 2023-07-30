import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BlogLayout, Layout } from './component/Layout';
import { ClassGrid, Contact, Home, LeftSidebar, PostTimeline, Price, Project } from './component/pages';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: '/price', element: <Price /> },
      { path: '/contact', element: <Contact /> },
      { path: '/project', element: <Project title="Project Management Admin Panel" tab="Personal Project" /> },
      {
        path: '/blog',
        element: <BlogLayout />,
        children: [
          { path: 'class-grid', element: <ClassGrid /> },
          { path: 'left-sidebar', element: <LeftSidebar /> },
          { path: 'post-timeline', element: <PostTimeline /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Import layouts and pages
import RootLayout from './app/layout';
import HomePage from './app/page';
import CheckinPage from './app/checkin/page';
import SelectPaxPage from './app/select-pax/page';
import PaxInfoPage from './app/pax-info/page';
import DangerousGoodsPage from './app/dangerous-goods/page';
import BoardingPassPage from './app/boarding-pass/page';

const router = createBrowserRouter([
  {
    path: '/',
    // Provide the RootLayout to mimic app/layout.tsx in Next.js
    element: <RootLayout />,
    children: [
      {
        index: true,
        // The default route inside the layout mimics app/page.tsx
        element: <HomePage />,
      },
      {
        path: 'checkin',
        element: <CheckinPage />,
      },
      {
        path: 'select-pax',
        element: <SelectPaxPage />,
      },
      {
        path: 'pax-info',
        element: <PaxInfoPage />,
      },
      {
        path: 'dangerous-goods',
        element: <DangerousGoodsPage />,
      },
      {
        path: 'boarding-pass',
        element: <BoardingPassPage />,
      },
      // Fallback for 404 (optional)
      // {
      //   path: '*',
      //   element: <div>Page not found</div>
      // }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

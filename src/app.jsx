import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landingPage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
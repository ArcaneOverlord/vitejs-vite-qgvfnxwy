import react from 'react';
import ReactDOM from 'reactDOM';
import reactRouter from 'react-router';
import Landing from './pages/landingPage';

function App (){
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Landing/>
    }
  ]);

return(
  <div>
  <RouterProvider router={router}/>
  </div>
)
};

export default App;

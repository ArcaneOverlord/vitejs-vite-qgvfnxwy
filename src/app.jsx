import react from 'react';
import ReactDOM from 'reactDOM';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
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

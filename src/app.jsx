import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Landing from './pages/landingPage.jsx';

function App (){
  const Router= createBrowserRouter([
    {
      path:"/",
      element:<Landing/>
    }
  ]);

return(
  <div>
  <RouterProvider router={Router}/>
  </div>
)
};

export default App;

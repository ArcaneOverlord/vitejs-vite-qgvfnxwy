import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Landing from './pages/hub.jsx';

function App (){
  const Router= createBrowserRouter([
    {
      path:"/",
      element:<Hub/>
    }
  ]);

return(
  <div>
  <RouterProvider router={Router}/>
  </div>
)
};

export default App;

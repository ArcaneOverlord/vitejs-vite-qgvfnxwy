import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Hub from './pages/hub.jsx';

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

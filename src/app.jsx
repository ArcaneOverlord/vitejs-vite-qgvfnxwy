import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Hub from './pages/hub.jsx';
import ReportPage from './pages/reportPage.jsx'

function App (){
  const Router= createBrowserRouter([
    {
      path:"/",
      element:<Hub/>
    },
    {
      path:"report",
      element:<ReportPage/>
    }
  ]);

return(
  <div>
  <RouterProvider router={Router}/>
  </div>
)
};

export default App;

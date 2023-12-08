import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layouts from './Layout.jsx';
import Home from './../assets/components/web/home/Home.jsx';
import Categories from './../assets/components/web/categories/Categories.jsx';
import DashboardLayouts from './DashboardLayout.jsx';
import HomeDashboard from './../assets/components/dashboard/home/Home.jsx';
import CategoriesDashboard from './../assets/components/dashboard/categories/Categories.jsx';
import Register from "../assets/components/web/register/Register.jsx";


export const router = createBrowserRouter([
 
    {
        path: "/",
        element: <Layouts />,
        children: [
        { path:'home',
          element: <Home />
        },
        { path:'categories',
          element: <Categories />
        },
        { path:'*',
          element: <h2> page not found --- web </h2>
        },
        { path:'register',
          element: <Register />
        },
    
    ]
      },
      {
        path: "/dashboard",
        element: <DashboardLayouts />,
        // errorElement:<h2>404 page not found --- dashboard</h2>,
        children: [
        { path:'home',
          element: <HomeDashboard />
        },
        { path:'categories',
          element: <CategoriesDashboard />
        }
        ,{ path:'*',
        element: <h2> page not found --- dash </h2>
      }
      ]
      }
    ]);
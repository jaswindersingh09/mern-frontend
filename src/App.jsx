import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Home} from "./components/pages/Home"
import { About } from "./components/pages/About"
import { Contact } from "./components/pages/Contact"
import { Register } from "./components/pages/Register"
import { Services } from "./components/pages/Services"
import { Login } from "./components/pages/Login"
import { AppLayout } from "./components/UI/AppLayout"
import { Logout } from "./components/pages/Logout"
import { AdminLayouts } from "./components/pages/AdminLayout"
import { AdminUsers } from "./components/pages/AdminUsers"
import { AdminContacts } from "./components/pages/AdminContact"
import { AdminService } from "./components/pages/AdminService"
import { AdminUpdate } from "./components/pages/AdminUpdate"
 
const App = ()=>{
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/logout",
          element: <Logout />
        },
        {
          path: "/admin",
          element: <AdminLayouts />,
          children: [
            {
              path: "/admin/users",
              element: <AdminUsers />
            },
            {
              path: "/admin/contacts",
              element: <AdminContacts />
            },
            {
              path: "/admin/services",
              element: <AdminService />
            },
            {
              path: "/admin/users/:id/edit",
              element: <AdminUpdate />
            },  
          ]
        },
      ]
    }
  ])

  return(
    <RouterProvider router={router}/>
  )
}

export default App;
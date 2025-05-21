import {Navigate, NavLink, Outlet} from "react-router-dom"
import {FaUser, FaRegListAlt, FaHome} from "react-icons/fa"
import {FaMessage} from "react-icons/fa6"
import { useAuth } from "../../../contextApi/ContextApi"

export const AdminLayouts = ()=>{
  const {user, isLoading} = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />
  }
  return(
    <>
    <header className="admin-layout">
      <section className="container">
        <nav>
          <ul>
            <li><NavLink to={"/admin/users"}><FaUser /> &nbsp;users</NavLink></li>
            <li><NavLink to={"/admin/contacts"}><FaMessage /> &nbsp;contacts</NavLink></li>
            <li><NavLink to={"/admin/services"}><FaRegListAlt /> &nbsp;services</NavLink></li>
            <li><NavLink to={"/"}><FaHome /> &nbsp;home</NavLink></li>
          </ul>
        </nav>
      </section>
    </header>
    <Outlet />
    </>
  )
}






























// import { NavLink, Outlet } from "react-router-dom"
// import {FaUser, FaHome, FaRegListAlt} from "react-icons/fa"
// import {FaMessage} from "react-icons/fa6"

// export const AdminLayout = ()=> {
//   return (
//     // <h1>Admin component</h1>
//     <>
//     <section>
//       <ul>
//         <li><NavLink to="/admin/users"><FaUser /> Users</NavLink></li>
//         <li><NavLink to="/admin/contacts"><FaMessage /> Contacts</NavLink></li>
//         <li><NavLink to="/admin/service"><FaRegListAlt /> Service</NavLink></li>
//         <li><NavLink to="/"><FaHome /> Home</NavLink></li>
//       </ul>
//     </section>
//     <Outlet />
//     </>
//   )
// }
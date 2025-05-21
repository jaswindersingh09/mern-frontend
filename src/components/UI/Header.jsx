import { NavLink } from "react-router-dom"
import { useAuth } from "../../../contextApi/ContextApi"

export const Header = ()=> {
  let {isLoggedIn} = useAuth();
  //  console.log("isLoggedIn", isLoggedIn)

  return(
    <section>
      <div className="container header">
        <div className="logo">
          <NavLink to={"/"}>MernStack</NavLink>
        </div>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/services"}>Services</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          {
            isLoggedIn ? 
            <li><NavLink to={"/logout"}>Logout</NavLink></li>
            : 
            <>
              <li><NavLink to={"/login"}>Login</NavLink></li>
              <li><NavLink to={"/register"}>SignUp</NavLink></li>
            </>
          }
        </ul>
      </div>
    </section>
  )
}
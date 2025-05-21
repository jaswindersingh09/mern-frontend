import { NavLink } from "react-router-dom"

export const ErrorPage = ()=> {
  return(
    <section className="section-error-page">
      <h1>404</h1>
      <p>SORRY! PAGE NOT FOUND</p>
      <p>Oops! it seems like the page you're trying to access doesn't exist if you <br /> believe there's an issue. feel free to report it, and we'll look into it.</p>
      
      <div className="btn">
        <NavLink to={"/"}><button>RETURN HOME</button></NavLink>
        <NavLink to={"/contact"}><button>REPORT PROBLEM</button></NavLink>
      </div>
    </section>
  )
}
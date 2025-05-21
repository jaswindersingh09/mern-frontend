import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../contextApi/ContextApi";
import {toast} from "react-toastify"

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const {addTokenInLocalStorage, API} = useAuth();
  const navigate = useNavigate();


  const handleInputChange = (e)=> {
    const name = e.target.name;
    const value = e.target.value;

    setLogin({
      ...login,
      [name]: value
    })
  }

  const handleFormSubmit = async (e)=>{
    e.preventDefault();
    // console.log(login);

    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(login)
      })

      const data = await response.json()
      // console.log(data.token);
      const token = data.token;
      console.log(data)
      // console.log(data.extraDetails)


      if (response.ok) {
        // alert("user login successful")
        toast.success("user login successful")
        navigate("/")
        setLogin("")
        addTokenInLocalStorage(token)
      }else{
        // alert(data.extraDetails)
        toast.error(data.extraDetails ? data.extraDetails : data.message)
      }
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    <>
      <section id="form">
        <div className="container grid grid-two-cols">
          <div className="img">
            <figure>
              <img src="/images/ecompost.png" alt="" />
            </figure>
          </div>

          <div className="form">
            <h1>Login Form</h1>
            <form action="/login" onSubmit={handleFormSubmit}>
              <div className="login">

                <div className="input">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required autoComplete="off" value={login.email} onChange={handleInputChange} />
                </div>

                <div className="input">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" required autoComplete="off" value={login.password} onChange={handleInputChange} />
                </div>

                <div className="btn">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

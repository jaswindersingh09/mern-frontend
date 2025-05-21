import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../contextApi/ContextApi";
import { toast } from "react-toastify";

export const Register = ()=> {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  })

  const {addTokenInLocalStorage, API} = useAuth();

  const navigate = useNavigate()
  const handleInputChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name] : value
    })
  }

  const handleFormSubmit = async (e)=> {
    e.preventDefault()
    console.log(user);

    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      const data = await response.json();
      console.log("response from server", data);
      const token = data.token;
      console.log(data.extraDetails)

      if (response.ok) {
        // alert("user created successfully")
        toast.success("user created successfully")
        setUser("")
        navigate("/login")
        addTokenInLocalStorage(token)
      }else{
        // alert(data.extraDetails)
        toast.error(data.extraDetails ? data.extraDetails : data.message)
        
      }
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return(
    <>
    <section id="form">
      <div className="container grid grid-two-cols">
        <div className="img">
          <figure>
          <img src="/images/ecompost.png" alt="" />
          </figure>
        </div>

        <div className="form">
          <h1>Registration Form</h1>
          <form action="/signup" onSubmit={handleFormSubmit}>
            <div className="signup">
              <div className="input">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required autoComplete="off" value={user.username} onChange={handleInputChange} />
              </div>

              <div className="input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required autoComplete="off" value={user.email} onChange={handleInputChange} />
              </div>

              <div className="input">
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInputChange} />
              </div>

              <div className="input">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required autoComplete="off" value={user.password} onChange={handleInputChange} />
              </div>

              <div className="btn">
                <button type="submit">Register Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

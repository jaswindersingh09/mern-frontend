import { useEffect, useState } from "react"
import { useAuth } from "../../../contextApi/ContextApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"


export const AdminUpdate = ()=>{
  const [update, setUpdate] = useState({
    username: "",
    email: "",
    phone: "",
  })

  const params = useParams();
  const {authorizationToken, API} = useAuth();  
  const navigate = useNavigate()
  

  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setUpdate((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    })
  }

  const handleFormSubmit = async (e)=>{
    e.preventDefault()
  }

  const getSingleUserData = async ()=>{
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {Authorization: authorizationToken}
      })
      const data = await response.json()
      setUpdate(data)
    } catch (error) {
      console.log(error);      
    }
  }

  const updateSingleUserData = async ()=>{
    try {
      const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken
        },
        body: JSON.stringify(update)
      })

      // const data = await response.json()
      // setUpdate(data)

      if (response.ok) {
        toast.success("user updated successfully")
        navigate("/admin/users")
      }else{
        toast.error(data.extraDetails ? data.extraDetails : data.message)
      }
    } catch (error) {
      console.log(error);
          
    }
  }

  useEffect(()=>{
    getSingleUserData()
  }, [])
  return(

    <>
      <section id="form" className="update-form">
    <h1>Admin Update User</h1>
        <div className="container grid grid-two-cols">

          <div className="form">
          <h1>Update Form</h1>
          <form action="/signup" onSubmit={handleFormSubmit}>
            <div className="signup">
              <div className="input">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required autoComplete="off" value={update.username} onChange={handleInputChange} />
              </div>

              <div className="input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required autoComplete="off" value={update.email} onChange={handleInputChange} />
              </div>

              <div className="input">
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" id="phone" required autoComplete="off" value={update.phone} onChange={handleInputChange} />
              </div>

              <div className="btn">
                <button type="submit" onClick={()=> updateSingleUserData()}>Update</button>
              </div>
            </div>
          </form>
        </div>
        </div>
      </section>
    </>
  )
}
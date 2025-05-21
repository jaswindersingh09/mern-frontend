// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { useAuth } from "../store/contextApi"

// export const AdminUpdate = () => {

//   const [data, setData] = useState({
//     username: "",
//     email: "",
//     phone: ""
//   })

//   const {authorizationToken, API} = useAuth();

//   const params = useParams();

//       // get single user data
//   const getSingleUserData = async (id) => {
//     try {
//       const response = await fetch(`${API}/api/admin/users/${params.id}`, {
//         method: "GET",
//         headers: {
//           Authorization: authorizationToken
//         }
//       })
//       const data = await response.json();
//       console.log("user single data", data);

//       setData(data)

//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(()=>{
//     getSingleUserData()
//   }, [])
//   const handleInputChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     return {
//       ...data,
//       [name]: value
//     }
//   }
//   return (
//     <section className="container contact-us">
//       <h1 className="contact-heading">Update User Data</h1>
//       <div className="container grid grid-two-cols">

//         <form action="">
//           <div className="contact">
//             <div>
//               <label htmlFor="username">username</label>
//               <input type="text" name="username" id="username" autoComplete="off" value={data.username} onChange={handleInputChange} required />
//             </div>

//             <div>
//               <label htmlFor="email">email</label>
//               <input type="text" name="email" id="email" autoComplete="off" value={data.email} onChange={handleInputChange} required />
//             </div>

//             <div>
//               <label htmlFor="phone">Mobile</label>
//               <input type="text" name="phone" id="phone" autoComplete="off" value={data.phone} onChange={handleInputChange} required />
//             </div>

//             <div className="btn">
//               <button type="submit">Update</button>
//             </div>
//           </div>

//         </form>
//       </div>
//     </section>
//   )
// }
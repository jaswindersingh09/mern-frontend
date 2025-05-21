import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useAuth } from "../../../contextApi/ContextApi";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const {authorizationToken, API} = useAuth();  

  const getAllUsers = async ()=>{
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {Authorization: authorizationToken},
      })

      const data = await response.json()
      // console.log("users data", data);
      
      setUsers(data)

    } catch (error) {
      // next(error)
      console.log(error);
      
    }
  }

  const deleteUser = async (id)=>{
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {Authorization: authorizationToken},
      })
      const data = await response.json()
      console.log("deleted user", data);
      if (response.ok) {
        getAllUsers()
        // setUsers(data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllUsers()
  }, [])

  return (
    <section className="admin-users-section">
      <div className="container">
        <h1>Admin Users Data</h1>
      </div>

      <div className="container admin-users">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((curElem, index) => {
                const { username, email, phone } = curElem;
                return (
                  <tr key={index}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td><Link to={`/admin/users/${curElem._id}/edit`}>Edit</Link></td>
                    <td><button className="deleteBtn" onClick={() => deleteUser(curElem._id)} >Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

























// export const Users = ()=> {
//   return (
//     <>
//     <h1>Users component</h1>
//     </>
//   )
// }
import { useEffect, useState } from "react"
import { useAuth } from "../../../contextApi/ContextApi";
import {toast} from "react-toastify"

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const {authorizationToken, API} = useAuth()

  const getAllContacts = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {Authorization: authorizationToken},
      })
      const data = await response.json()
      console.log("contact data: ", data);
      
      setContactData(data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteBtn = async (id)=> {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {Authorization: authorizationToken}
      })
      if (response.ok) {
        getAllContacts()
        toast.success("Contact Deleted successfully")
      }else{
        toast.error("Contact Not Deleted")
        
      }
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(() => {
    getAllContacts()
  }, [])
  return (
    <>
      <section className="admin-users-section admin-contacts">
        <div className="container">
          <h1>Admin Contacts Data</h1>
        </div>

        <div className="container admin-users admin-contacts-data">
          <table>
            <thead>
              <tr className="contact-tr">
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Operation</th>
              </tr>
            </thead>

            <tbody>
              {
                contactData.map((curElem, index) => {
                  const { username, email, message, _id } = curElem;
                  return (
                    <tr key={index} className="tabledata">
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{message}</td>
                      <td><button onClick={()=> handleDeleteBtn(_id)} className="contact-btn">Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
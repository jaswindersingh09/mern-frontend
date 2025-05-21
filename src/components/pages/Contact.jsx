import {useState} from "react";
import {useAuth} from "../../../contextApi/ContextApi"

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",    
    email: "",    
    message: "",    
  });

  const {user} = useAuth();
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      username : user.username,
      email : user.email,
      message : "",
    })

    setUserData(false)
  }

  const handleInputChange = (e)=> {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name] : value
    })

  }



  const handleFormSubmit = async (e)=>{
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      })

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        alert("contact form submitted successfully")
        setContact({ username : user.username, email : user.email, message : "" })
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
            <h1>Contact Form</h1>
            <form action="/contact" onSubmit={handleFormSubmit}>
              <div className="contact">

                <div className="input">
                  <label htmlFor="username">Username</label>
                  <input type="username" name="username" id="username" value={contact.username} onChange={handleInputChange} required autoComplete="off" />
                </div>

                <div className="input">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" value={contact.email} onChange={handleInputChange} required autoComplete="off" />
                </div>

                <div className="input">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows={6} cols={30} value={contact.message} onChange={handleInputChange} required autoComplete="off"></textarea>
                </div>

                <div className="btn">
                  <button type="submit">Contact</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

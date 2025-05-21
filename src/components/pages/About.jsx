import { useAuth } from "../../../contextApi/ContextApi";

export const About = ()=> {
    const {user} = useAuth();
  
  return(
    <>
      <main>
      <section className="about-section">
      <div className="container grid grid-two-cols">
        <div className="content">
          <p>Welcome, {user.username}</p>
          <h1>Why Choose Us?</h1>
          <p>Are you ready to take your business to the next level with cutting-edge IT solution? Look no further.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam itaque rem cupiditate sint eligendi amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo eveniet unde?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis alias dolorem reiciendis quo iusto fuga aliquid fugiat deleniti.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, porro?</p>
          <div className="btn">
            <button className="contact">Contact Now</button>
            <button className="learn">Learn More</button>
          </div>
        </div>

        <div className="image">
          <figure>
            <img src="/images/ecompost.png" alt="" />
          </figure>
        </div>
      </div>
    </section>
      </main>

      <section className="section-analytics">
      <div className="container grid grid-four-cols">
        <div className="div1">
          <h2>50+</h2>
          <p>Companies Registered</p>
        </div>

        <div className="div1">
          <h2>150+</h2>
          <p>Projet Done</p>
        </div>

        <div className="div1">
          <h2>250+</h2>
          <p>Hapy Clients</p>
        </div>

        <div className="div1">
          <h2>650K+</h2>
          <p>Youtube Subscribers</p>
        </div>
      </div>
    </section>
    </>
  )
}
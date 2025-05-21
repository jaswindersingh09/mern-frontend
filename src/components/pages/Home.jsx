export const Home = ()=> {
  return(
    <>
    <section>
      <div className="container grid grid-two-cols">
        <div className="content">
          <p>We are the World Best IT Company</p>
          <h1>Welcome to Jaswinder Technical</h1>
          <p>Are you ready to take your business to the next level with cutting-edge IT solution? Look no further! At Thapa Technical we specialized in providing innovative IT services and solutions tailored to meet your unique needs.</p>
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

    <section className="section-analytics">
      <div className="container grid grid-four-cols">
        <div className="div1">
          <h2>50+</h2>
          <p>Registered Companies</p>
        </div>

        <div className="div1">
          <h2>100,00+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="div1">
          <h2>500+</h2>
          <p>Well known Developers</p>
        </div>

        <div className="div1">
          <h2>24/7</h2>
          <p>Services</p>
        </div>
      </div>
    </section>

    <section className="bottom-content">
      <div className="container grid grid-two-cols">
      <div className="image">
          <figure>
            <img src="/images/ecompost.png" alt="" />
          </figure>
        </div>
        <div className="content">
          <p>We are here to help you</p>
          <h1>Get Started Today</h1>
          <p>Are you ready to take your business to the next level with cutting-edge IT solution? Look no further! At Thapa Technical we specialized in providing innovative IT services and solutions tailored to meet your unique needs.</p>
          <div className="btn">
            <button className="contact">Contact Now</button>
            <button className="learn">Learn More</button>
          </div>
        </div>
       
      </div>
    </section>
    </>
  )
}
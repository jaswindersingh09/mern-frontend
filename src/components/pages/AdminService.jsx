// export const AdminService = ()=> {
//   return (
//     <>
//     <h1>Service component</h1>
//     </>
//   )
// }

import { useAuth } from "../../../contextApi/ContextApi"

export const AdminService = ()=> {
  const {services} = useAuth()
  console.log(services);
  
  return(
    <section className="section-service admin-services">
      <div className="heading">
        <h1>Service page</h1>
      </div>
      <div>
        <ul>
          {
            services?.map((curElem)=>{
              const {service, description,price,provider} = curElem
              return(
                <li>
                  <figure>
                    <img src="./images/ecompost.png" alt="" />
                  </figure>
                  <div>
                    <p>{price}</p>
                    <p>{provider}</p>
                  </div>
                    <h2>{service}</h2>
                    <p className="desc">{description}</p>
                </li>
              )
            })
          }
        </ul>
      </div>

    </section>
  )
}
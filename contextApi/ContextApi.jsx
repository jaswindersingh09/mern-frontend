import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [user, setUser] = useState("")
  const [services, setServices] = useState([])
  const[isLoading, setIsLoading] = useState(true)

  const authorizationToken = `Bearer ${token}`;

  const API = import.meta.env.VITE_APP_URI_API;

  const addTokenInLocalStorage = (serverToken)=>{
    setToken(serverToken)
    return localStorage.setItem("token", serverToken)
  }

  let isLoggedIn = !!token
  // console.log("isLoggedIn", isLoggedIn);

  const LogoutUser = ()=>{
    setToken("")
    return localStorage.removeItem("token")
  }

  const userAuthentication = async ()=>{
    try {
      setIsLoading(true)
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers:{
          Authorization: authorizationToken
        }
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.userData)
        setIsLoading(false)
      }else{
        console.log("error fetching data");
        setIsLoading(false)

      }
    } catch (error) {
      console.log(error);
      
    }
  }

  const getService = async ()=>{
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
        headers:{
          "Content-Type": "application/json"
        }
      })
      if (response.ok) {
        const serviceData = await response.json()
        // console.log(serviceData);
        setServices(serviceData)
        
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    userAuthentication()
    getService()
  }, [])
  return(

    <AuthContext.Provider value={{isLoggedIn, addTokenInLocalStorage, LogoutUser, user, services, authorizationToken, isLoading, API}}>
    {children}
  </AuthContext.Provider>
  )
}

export const useAuth = ()=>{
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("AuthProvider is used outside for the provider");
  }
  return authContextValue
}
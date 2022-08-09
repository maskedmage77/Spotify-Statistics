import { useEffect, useState } from "react";

export default () => {

  const [token, setToken] = useState('');
  
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    // let token = null
    if (token === null) {
      token = '';
    }
    if (!token && hash) {
      // @ts-ignore
      token = hash.substring(1).split("&").find(e => e.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, [])
  
  return token;
 
};
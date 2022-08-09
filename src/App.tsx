import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {

  const [token, setToken] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/stats");
  } ,[token])
  
  useEffect(() => {

    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

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

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;

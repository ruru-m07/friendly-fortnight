import api from "./api/index";
import { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [user, setUser] = useState([]);

  const users = async () => {
    const response = await api.get("/user/alluser");
    return response.data;
  };

  useEffect(() => {
    const getalluser = async () => {
      const alluser = await users();
      if (alluser) setUser(alluser.data);
    };
    getalluser();
  }, []);

  console.log(user);

  const token = true;

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
              <Login />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/signup"
          element={
              <Signup />
          }
        />
      </Routes>
    </>
  );
}

export default App;

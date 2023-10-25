import { useContext, useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import userContext from "./context/user/userContext";
import { UserInterface } from "./interfaces/user";
import { useAuth } from "./context/AuthContext";
import { whoami } from "./api";
import { requestHandler } from "./utils";

function App() {
  // const [user, setUser] = useState<UserInterface | null>(null);

  const token = localStorage.getItem("token");

  const { user } = useAuth();

  console.log(user)
 
  

  return (
    <>
      {localStorage.getItem("token") ? <Navbar /> : null}

      <Routes>
        <Route
          path="/"
          element={
            token && user?._id ? <Navigate to="/login" /> : <Navigate to="/" />
          }
        ></Route>
        <Route>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route>
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

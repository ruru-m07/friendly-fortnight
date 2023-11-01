import { useEffect } from "react";
import Navbar from "./pages/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// ...

function App() {
  // get token from localstorage
  const token = localStorage.getItem("token");

  // navigate user if token not exist
  let navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      {/* {token === "" || token === null ? (
        {}
        ) : (
        <Navbar />
      )} */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/settings" element={<Navbar />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

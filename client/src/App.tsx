import { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
// import userContext from "./context/user/userContext";
import { UserInterface } from "./interfaces/user";
import { whoami } from "./api";
import { requestHandler } from "./utils";
import Loader from "./components/Loader";

function App() {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [loadingChats, setLoadingChats] = useState(false); // To indicate loading of chats

  const token = localStorage.getItem("token");

  const getuser = async () => {
    requestHandler(
      async () => await whoami(),
      setLoadingChats,
      (res) => {
        const { data } = res;
        setUser(data || []);
        // console.log(data);
      },
      alert
    );
  };

 useEffect(() => {
   if (token) {
     getuser();
   }
 }, []);

  // console.log(user);

  return (
    <>
      {loadingChats ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Navbar user={user} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;

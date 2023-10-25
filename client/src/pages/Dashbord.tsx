import { useContext } from "react";
import userContext from "../context/user/userContext";

const Dashbord = () => {
  const context = useContext(userContext);
  const { user } = context;

  return (
    <div>
      <div className=" flex  text-white text-6xl">
        <p className=" mr-5 ">Hello, </p>
        <p> {user?.name}</p>
      </div>
    </div>
  );
};

export default Dashbord;

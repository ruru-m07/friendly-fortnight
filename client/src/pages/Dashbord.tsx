import { useAuth } from "../context/AuthContext";

const Dashbord = () => {
  const {user} = useAuth()
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

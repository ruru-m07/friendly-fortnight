import { useAuth } from "../../../context/AuthContext";
import userimage from "../../../assets/user.png";

const Usersetting = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className=" m-4">profile Settings</h1>
      <div className=" flex justify-center">
        <hr className=" w-[95%] h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      <div className=" w-full  ">
        <div className=" flex justify-center mt-1 ">
          <div className="absolute">
            <img
              className=" rounded-full w-52 h-52"
              src={user?.image ?? userimage}
            />
            <div
              className="w-52 h-52 bg-red-400 absolute hover:bg-red-200 rounded-full z-10"
            ></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Usersetting;

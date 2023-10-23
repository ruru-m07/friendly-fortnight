import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import Dashbord from "./Dashbord";

const Navbar = () => {
  const sidebar = () => {
    setStyle("w-full absolute");
  };
  const [style, setStyle] = useState("w-0");
  return (
    <div className=" ">
      <div className=" flex">
        <div className={`${style} md:w-80  h-screen bg-red-700`}>
          <div className=" h-14 bg-gray-950 flex items-center justify-between border-b-red-600">
            <div className=" w-16">
              <img className=" ml-2 h-16 w-16" src={logo} alt="logo" />
            </div>
            <label className="md:hidden">
              <button
                onClick={() => {
                  setStyle("w-0");
                }}
                className="bi bi-x-lg text-lg w-16 text-white ml-4 "
              ></button>
            </label>
          </div>
          <div className=" calc bg-gray-950">
            <div className=" bg-gray-950 h-1" />
            <div className=" grid  h-[99%] content-between">
              <div>
                <div>
                  <div className=" m-3">
                    <div className="rounded-lg text-zinc-400 hover:text-white bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <i className="bi bi-columns-gap text-xl  ml-4 mr-2 "></i>
                      <div className=" ">Dashbord</div>
                    </div>
                  </div>
                  <div className=" m-3">
                    <div className="rounded-lg text-zinc-400 hover:text-white bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <i className="bi bi-folder text-xl  ml-4 mr-2 "></i>
                      <div className=" ">Projects</div>
                    </div>
                  </div>
                  <div className=" m-3">
                    <div className=" text-zinc-400 hover:text-white  rounded-lg bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <i className="bi bi-people text-xl  ml-4 mr-2 "></i>
                      <div className=" ">Team</div>
                    </div>
                  </div>
                  <div className=" m-3">
                    <div className=" text-zinc-400 hover:text-white rounded-lg bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <i className="bi bi-chat-left-text text-xl ml-4 mr-2 "></i>
                      <div className="">message</div>
                    </div>
                  </div>
                  <div className=" m-3">
                    <div className=" text-zinc-400 hover:text-white rounded-lg bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <i className="bi bi-puzzle text-xl ml-4 mr-2 "></i>
                      <div className="">Plugin</div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center">
                  {/* <hr className=" w-[80%] h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" /> */}
                </div>
                <div>
                  <h1 className=" ml-7 mt-5 text-gray-500 dark:text-gray-400 text-[12px] ">
                    Your repo
                  </h1>
                  <div className=" m-3">
                    <div className=" text-zinc-400 hover:text-white rounded-lg bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <div className="border rounded border-gray-500 bg-gray-700 h-[25px] w-[25px] text-xl ml-4 mr-2 flex justify-center items-center">
                        <h1 className=" text-[12px] ">A</h1>
                      </div>
                      <div className="">Heroicon</div>
                    </div>
                    <div className=" text-zinc-400 hover:text-white rounded-lg bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <div className="border rounded border-gray-500 bg-gray-700 h-[25px] w-[25px] text-xl ml-4 mr-2 flex justify-center items-center">
                        <h1 className=" text-[12px] ">T</h1>
                      </div>
                      <div className="">TailwindUI</div>
                    </div>
                    <div className=" text-zinc-400 hover:text-white rounded-lg bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <div className="border rounded border-gray-500 bg-gray-700 h-[25px] w-[25px] text-xl ml-4 mr-2 flex justify-center items-center">
                        <h1 className=" text-[12px]  ">G</h1>
                      </div>
                      <div className="">Github</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* settings */}
              <div>
                <div className=" flex justify-center">
                  <hr className=" w-[85%] h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div>
                  <div className=" m-3">
                    <div className="rounded-lg text-zinc-400 hover:text-white    bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <i className="bi bi-gear text-xl  ml-4 mr-2 "></i>
                      <div className=" ">Settings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen">
          <div className=" h-14 bg-gray-950  ">
            <div className=" flex items-center h-full content-between">
              <div className="h-full w-full flex items-center">
                <div className=" flex">
                  <label className="md:hidden">
                    <button
                      onClick={sidebar}
                      className="bi bi-three-dots-vertical text-lg text-white ml-4 mr-2 "
                    ></button>
                  </label>
                  <label>
                    <i className="bi bi-search text-lg text-white ml-4 mr-2 "></i>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="bg-transparent border-transparent focus:border-current focus:ring-0  ml-2 text-white focus:ring-inherit w-[10rem] p-2.5"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className=" h-full w-[8rem] flex items-center text-white">
                <div>
                  <i className="bi bi-bell"></i>
                </div>
                <div className="h-[50%] mx-4 w-px bg-gray-800" />
                <div className="">
                  <img
                    src={user}
                    alt="user"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="calc">
            <div className=" dashbord h-full bg-zinc-800 flex justify-center items-center">
              <div>
                <Dashbord />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

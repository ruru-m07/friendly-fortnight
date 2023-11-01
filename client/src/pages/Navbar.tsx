import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Dashbord from "./Dashbord";
import { Link, useLocation } from "react-router-dom";
import userimg from "../assets/user.png";
import { useAuth } from "../context/AuthContext";
import Settings from "./settings/Settings";

const Navbar = () => {
  // ** use location
  let location = useLocation();

  // ** sidebar show % hide btn
  const sidebar = () => {
    setStyle("w-full absolute");
  };
  const [style, setStyle] = useState("w-0");

  const { user } = useAuth();

  // ** nav items array
  const navitems = [
    {
      id: "1",
      icon: "columns-gap",
      text: "dashbord",
      path: "/",
    },
    {
      id: "2",
      icon: "folder",
      text: "Projects",
      path: "/Projects",
    },
    {
      id: "3",
      icon: "people",
      text: "Team",
      path: "/Team",
    },
    {
      id: "4",
      icon: "chat-left-text",
      text: "message",
      path: "/message",
    },
    {
      id: "5",
      icon: "puzzle",
      text: "Plugin",
      path: "/Plugin",
    },
  ];

  const repos = [
    {
      id: "1",
      icon: "A",
      name: "Heroicon",
    },
    {
      id: "2",
      icon: "T",
      name: "TailwindUI",
    },
    {
      id: "3",
      icon: "G",
      name: "Github",
    },
  ];

  const mapItems = () => {
    return navitems.map((item) => {
      const pathnameIsSame = location.pathname === item.path;
      const className = pathnameIsSame
        ? "rounded-lg text-white bg-zinc-800 h-10 flex items-center"
        : "rounded-lg text-zinc-400 hover:text-white bg-gray-950 hover:bg-zinc-800 h-10 flex items-center";

      return (
        <div className=" m-3" key={item.id}>
          <Link to={item.path}>
            <div className={className}>
              <i className={`bi bi-${item.icon} text-xl ml-4 mr-2 `}></i>
              <div className=" ">{item.text}</div>
            </div>
          </Link>
        </div>
      );
    });
  };

  const mapRepos = () => {
    return repos.map((item) => {
      return (
        <div
          key={item.id}
          className=" text-zinc-400 hover:text-white rounded-lg bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center"
        >
          <div className="border rounded border-gray-500 bg-gray-700 h-[25px] w-[25px] text-xl ml-4 mr-2 flex justify-center items-center">
            <h1 className=" text-[12px] ">{item.icon}</h1>
          </div>
          <div className="">{item.name}</div>
        </div>
      );
    });
  };

  const [component, setComponent] = useState<
    React.FunctionComponentElement<{}> | undefined
  >(undefined);

  const memoizedComponent = () => {
    if (location.pathname === "/") {
      const settingsElement = React.createElement(Dashbord);
      return settingsElement;
    }
    if (location.pathname === "/settings") {
      const settingsElement = React.createElement(Settings);
      return settingsElement;
    }

    // Return undefined if the pathname is not "/" or "/settings"
    return undefined;
  };

  useEffect(() => {
    const response = memoizedComponent();
    setComponent(response);
  }, [location.pathname]);

  return (
    <div className=" ">
      <div className=" flex">
        <div className={`${style} md:w-80  h-screen bg-red-700`}>
          <div className=" h-14 bg-gray-950 flex items-center justify-between border-b-red-600">
            <Link to={"/"} className=" w-16">
              <img className=" ml-2 h-16 w-16" src={logo} alt="logo" />
            </Link>
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
                {/* links for nav */}
                <div>{mapItems()}</div>
                <div className=" flex justify-center" />
                {/* repos */}
                <div>
                  <h1 className=" ml-7 mt-5 text-gray-500 dark:text-gray-400 text-[12px] ">
                    Your repo
                  </h1>
                  <div className=" m-3">{mapRepos()}</div>
                </div>
              </div>

              {/* settings */}
              <Link to="/settings">
                <div className=" flex justify-center">
                  <hr className=" w-[85%] h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div>
                  <div className=" m-3">
                    <div className="rounded-lg text-zinc-400 hover:text-white    bg-gray-950 hover:bg-zinc-800 h-10 flex  items-center">
                      <i className="bi bi-gear text-xl  ml-4 mr-2 "></i>
                      <button>Settings</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* top nav bar */}
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
                    src={user?.image ?? userimg}
                    alt="user"
                    className="object-cover bg-white h-10 w-10 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="calc">
            <div className=" text-white dashbord h-full bg-zinc-800 flex justify-center items-center">
              <div>{component}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  let [image, setImage] = useState("");
  let [imagecon, setImagecon] = useState("flex");
  const [progress, setProgress] = useState("");

  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e: { target: { name: any; value: any } }) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    let host = "http://localhost:3005";
    setProgress("cursor-progress");
    e.preventDefault();
    
    const responce = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        lname: credentials.lname,
        email: credentials.email,
        image: image,
        password: credentials.password,
      }),
    });

    const json = await responce.json();
    // console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      window.location.reload();
    } else {
      console.log("Invalid Credentials", "danger");
    }
  };

  function convertToBase64(e: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result as string);
      setImagecon("hidden");
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  }

  const rmimage = () => {
    setImage("");
    setImagecon("flex");
  };

  return (
    <section className="bg-gray-50 dark:bg-zinc-950 flex py-20">
      <div className=" flex flex-col  items-center justify-center px-6 mx-auto lg:py-0  ">
        <div className=" bg-white py-5 mt-96 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-900 dark:border-zinc-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mt-1 shadow-2xl shadow-zinc-900">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex">
                {/* Name */}
                <div className="mr-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your First Name
                  </label>
                  <input
                    type="text"
                    value={credentials.name}
                    onChange={onChange}
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-800 dark:focus:border-zinc-500"
                    placeholder="Enter your first name"
                    minLength={3}
                    required
                  />
                </div>

                {/*fName */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Last Name
                  </label>
                  <input
                    type="text"
                    value={credentials.lname}
                    onChange={onChange}
                    name="lname"
                    id="lname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-800 dark:focus:border-zinc-500"
                    placeholder="Enter your last name"
                    minLength={3}
                    required
                  />
                </div>
              </div>
              {/* // Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-800 dark:focus:border-zinc-500"
                  placeholder="name@company.com"
                  value={credentials.email}
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>

              <div className="flex">
                <div className="mr-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={credentials.password}
                    onChange={onChange}
                    minLength={8}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-800 dark:focus:border-zinc-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="cpassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    value={credentials.cpassword}
                    onChange={onChange}
                    minLength={8}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-800 dark:focus:border-zinc-500"
                    required
                  />
                </div>
              </div>

              <div
                className={` ${imagecon} items-center justify-center w-full`}
              >
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-zinc-700 hover:bg-zinc-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-zinc-700"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPGE or JPG (MAX. 400x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={convertToBase64}
                  />
                </label>
              </div>
              {image === "" || image === null ? (
                ""
              ) : (
                <div className="flex jc justify-center items-center">
                  <img
                    className="rounded-full w-32 h-32 "
                    width={100}
                    height={100}
                    alt={image}
                    src={image}
                  />
                  <div className="grid ml-2">
                    <button
                      className="m-2 p-2 bg-red-800 text-white font-semibold rounded-lg shadow-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      onClick={rmimage}
                    >
                      romove image
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className={`${progress} w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black dark:bg-white dark:hover:bg-zinc-300 dark:focus:ring-zinc-800`}
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-white hover:underline dark:text-white"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: { target: { name: any; value: any } }) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  const { login } = useAuth();
  const handleSubmit = async () => await login(credentials);

  return (
    <section className="bg-gray-50 dark:bg-zinc-950">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-900 dark:border-zinc-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-2xl shadow-zinc-900 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight  text-gray-900 md:text-2xl dark:text-white">
              Login to account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
              <div>
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
              <button
                type="submit"
                className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black dark:bg-white dark:hover:bg-zinc-300 dark:focus:ring-zinc-800`}
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-white hover:underline dark:text-white"
                >
                  Signup here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import Loader from "../components/Loader";
import { UserInterface } from "../interfaces/user";
import { LocalStorage, requestHandler } from "../utils";

// Create a context to manage authentication-related data and functions
const AuthContext = createContext<{
  user: UserInterface | null;
  token: string | null;
  login: (data: { email: string; password: string }) => Promise<void>;
}>({
  user: null,
  token: null,
  login: async () => {},
});

// Create a hook to access the AuthContext
const useAuth = () => useContext(AuthContext);

// Create a component that provides authentication-related data and functions
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserInterface | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const navigate = useNavigate();

 const login = async (data: { email: string; password: string }) => {
  try {
    await requestHandler(
      async () => await loginUser(data),
      setIsLoading,
      (res) => {
        const token = res.authToken;
        localStorage.setItem("token", token);
        // console.log(res.authToken);
        navigate("/"); // Redirect to the chat page after successful login
        
      },
      alert // Display error alerts on request failure
    );
  } catch (error) {
    // Handle the error here
    console.log(error);
  }
};


// const whoami = async (data: { token: string }) => {
//   try {
//     await requestHandler(
//       async () => await whoami(data),
//       setIsLoading,
//       (res) => {
//         const token = res.authToken;
//         localStorage.setItem("token", token);
//         console.log(res.authToken);
//         navigate("/"); // Redirect to the chat page after successful login
//       },
//       alert // Display error alerts on request failure
//     );
//   } catch (error) {
//     // Handle the error here
//     console.log(error);
//   }
// };

 
  // Check for saved user and token in local storage during component initialization
  useEffect(() => {
    setIsLoading(true);
    const _token = LocalStorage.get("token");
    const _user = LocalStorage.get("user");
    if (_token && _user?._id) {
      setUser(_user);
      setToken(_token);
    }
    setIsLoading(false);
  }, []);

  // Provide authentication-related data and functions through the context
  return (
    <AuthContext.Provider value={{ user, login, token }}>
      {isLoading ? <Loader /> : children} {/* Display a loader while loading */}
    </AuthContext.Provider>
  );
};

// Export the context, provider component, and custom hook
export { AuthContext, AuthProvider, useAuth };

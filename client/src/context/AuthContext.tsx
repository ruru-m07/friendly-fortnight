import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser, signupUser, whoami } from "../api";
import Loader from "../components/Loader";
import { UserInterface } from "../interfaces/user";
import { requestHandler } from "../utils";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Create a context to manage authentication-related data and functions
const AuthContext = createContext<{
  user: UserInterface | null;
  login: (data: { email: string; password: string }) => Promise<void>;
  signup: (data: {
    email: string;
    password: string;
    name: string;
    lname: string;
  }) => Promise<void>;
}>({
  user: null,
  login: async () => {},
  signup: async () => {},
});

// Create a hook to access the AuthContext
const useAuth = () => useContext(AuthContext);

// Create a component that provides authentication-related data and functions
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserInterface | null>(null);
  const token = localStorage.getItem("token");
  let navigate = useNavigate();

  const login = async (data: { email: string; password: string }) => {
    try {
      await requestHandler(
        async () => await loginUser(data),
        setIsLoading,
        (res) => {
          const token = res.authToken;
          toast.success("login successfully ✅");
          localStorage.setItem("token", token);
          navigate("/");
        },
        alert
      );
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  };

  const signup = async (data: {
    email: string;
    password: string;
    name: string;
    lname: string;
  }) => {
    try {
      await requestHandler(
        async () => await signupUser(data),
        setIsLoading,
        (res) => {
          const token = res.authToken;
          toast.success("signup successfully ✅");
          localStorage.setItem("token", token);
          navigate("/");
        },
        alert
      );
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  };

  // ** get user
  useEffect(() => {
    const getuser = async () => {
      requestHandler(
        async () => await whoami(),
        setIsLoading,
        (res) => {
          const { data } = res;
          setUser(data || []);
          toast.success(`Welcome, ${data?.name}! 🌟`);
          toast.dismiss();
        },
        alert
      );
    };

    if (token) {
      getuser();
    }
  }, [token]);

  // Provide authentication-related data and functions through the context
  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      <Toaster theme="dark" position="top-right" expand={true} />
      {isLoading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

// Export the context, provider component, and custom hook
export { AuthContext, AuthProvider, useAuth };

import { whoami } from "../../api";
import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
  
  const [user, setUser] = useState("");

  // Get all Notes
const getUser = async () => {
  const response: { data: any } = await whoami();
  const json = await response.data;
  setUser(json);
};


  return (
    <UserContext.Provider value={{ user, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;

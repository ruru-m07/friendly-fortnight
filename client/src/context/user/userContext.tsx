import { createContext } from "react";
import { UserInterface } from "../../interfaces/user";

const userContext = createContext<{
  user: UserInterface | null;
  token: string | null;
}>({
    user: null,
    token: null
});



export default userContext;

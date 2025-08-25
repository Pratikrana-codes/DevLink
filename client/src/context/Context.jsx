import { createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{

    const urlBack = "https://devlink-server-e2sr.onrender.com";

    return(
        <UserContext.Provider value={{ urlBack }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUrl = ()=> useContext(UserContext);

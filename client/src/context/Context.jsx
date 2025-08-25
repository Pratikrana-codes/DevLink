import { createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{

    const urlBack = "http://localhost:3000";

    return(
        <UserContext.Provider value={{ urlBack }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUrl = ()=> useContext(UserContext);
import React,{useContext} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;
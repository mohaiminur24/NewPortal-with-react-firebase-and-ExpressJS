import { createContext, useState } from "react";

export const userContext = createContext();

const AuthContext = ({children}) => {
    const [user , setUser] = useState('');

    const data = {
        user,
    }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
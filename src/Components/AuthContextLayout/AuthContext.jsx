import { createContext, useState } from "react";
import app from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app);

export const userContext = createContext();

const AuthContext = ({children}) => {
    const [user , setUser] = useState('');

    const handleregisterbyemailpass = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const handleloginbyemailpass = (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const data = {
        user,
        setUser,
        handleregisterbyemailpass,
        handleloginbyemailpass
    }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
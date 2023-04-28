import { createContext, useState } from "react";
import app from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const userContext = createContext();

const AuthContext = ({children}) => {
    const [user , setUser] = useState('');

    const handleregisterbyemailpass = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const handleloginbyemailpass = (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    };
    
    const handleloginbygoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then(res=>{
            setUser(res.user);
            alert("Login with google successfuly!")
        }).then(error=>{
            console.log(error.message)
        })
    }

    const data = {
        user,
        setUser,
        handleregisterbyemailpass,
        handleloginbyemailpass,
        handleloginbygoogle
    }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
import { createContext, useEffect, useState } from "react";
import app from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const userContext = createContext();

const AuthContext = ({children}) => {
    const [user , setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const handleregisterbyemailpass = (email,pass) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass);
    };
    const handleloginbyemailpass = (email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass);
    };
    
    const handleloginbygoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then(res=>{
            alert("Login with google successfuly!")
        }).then(error=>{
            console.log(error)
        })
    };
    const Logout = ()=>{
            return signOut(auth);
    }

    useEffect(()=>{
        const  unsuscribe = onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser);
            setLoading(false);
        });
        return ()=>{
            return unsuscribe;
        }
    },[])

    const data = {
        user,
        setUser,
        handleregisterbyemailpass,
        handleloginbyemailpass,
        handleloginbygoogle,
        Logout,
        loading
    }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
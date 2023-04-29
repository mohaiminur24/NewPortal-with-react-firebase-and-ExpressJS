import { createContext, useEffect, useState } from "react";
import app from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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
            toast.success('Successfully Login By Google!');
        }).then(error=>{
            console.log(error)
        })
    };
    const Logout = ()=>{
            return signOut(auth);
    };

    const handleloginbygithub =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            toast.success('Successfully Login by Github!')
        }).catch(error=>{
            console.log(error.message);
        })

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
        handleloginbygithub,
        Logout,
        loading
    }

    return (
        <userContext.Provider value={data}>
            <div><Toaster/></div>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
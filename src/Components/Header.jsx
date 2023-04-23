import { useContext } from "react";
import { userContext } from "./AuthContextLayout/AuthContext";

const Header = () => {
    const data = useContext(userContext);
    console.log(data);
    return (
        <div>
            
            
        </div>
    );
};

export default Header;
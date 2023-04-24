import { useContext } from "react";
import { userContext } from "./AuthContextLayout/AuthContext";
import moment from "moment/moment";

const Header = () => {

    const {user} = useContext(userContext);
    const date = moment().format('LLLL');

    return (
        <div className="w-11/12 mx-auto text-center my-5">
            <img className="w-1/4 mx-auto" src="logo.png" alt="" />
            <h3 className="text-sm text-gray-400 mt-3">journalism without Fear and Favour</h3>
            <h2 className="text-sm text-gray-400 mb-3">{date}</h2>
            <div className="w-full h-auto bg-gray-200 py-2 px-2 flex items-center rounded-sm my-5">
                <button className="px-3 py-2 font-semibold text-white space-x-16 rounded-sm bg-red-500 mr-auto">Latest</button>
                <div className="w-11/12 mx-auto">
                <marquee className="font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus officia provident eius eum quibusdam recusandae saepe illo ratione cupiditate earum!
                </marquee>
                </div>

            </div>
        </div>
    );
};

export default Header;
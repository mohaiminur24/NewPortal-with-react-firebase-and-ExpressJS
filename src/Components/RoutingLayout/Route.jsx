import { createBrowserRouter } from "react-router-dom";
import Home from "../HomeLayout/Home";


export const route = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
    }
])
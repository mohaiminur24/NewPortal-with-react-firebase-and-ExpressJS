import { createBrowserRouter } from "react-router-dom";
import Home from "../HomeLayout/Home";
import Allnews from "../HomeLayout/Allnews";


export const route = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        loader: ()=>fetch("http://localhost:5000/category"),
        children:[
            {
                path:"/",
                element: <Allnews/>,
                loader: ()=> fetch("http://localhost:5000/news")
            }
        ]
    }
])
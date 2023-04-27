import { createBrowserRouter } from "react-router-dom";
import Home from "../HomeLayout/Home";
import Allnews from "../HomeLayout/Allnews";
import CategoriesData from "../CategorydataLayout/CategoriesData";
import NewsDetails from "../NewsDetailsLayout/NewsDetails";


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
            },
            {
                path:"/categories/:id",
                element: <CategoriesData></CategoriesData>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }

        ]
    },
    {
        path:"/newsdetails/:id",
        element: <NewsDetails/>,
        loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
    }
])
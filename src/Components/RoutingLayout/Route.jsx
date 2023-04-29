import { createBrowserRouter } from "react-router-dom";
import Home from "../HomeLayout/Home";
import Allnews from "../HomeLayout/Allnews";
import CategoriesData from "../CategorydataLayout/CategoriesData";
import NewsDetails from "../NewsDetailsLayout/NewsDetails";
import LoginPage from "../LoginRegistrationLayout/LoginPage";
import Registration from "../LoginRegistrationLayout/Registration";
import PrivateRoute from "../AuthContextLayout/PrivateRoute";


export const route = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        loader: ()=>fetch("https://newsportal-server-developermmr.vercel.app/category"),
        children:[
            {
                path:"/",
                element: <Allnews/>,
                loader: ()=> fetch("https://newsportal-server-developermmr.vercel.app/news")
            },
            {
                path:"/categories/:id",
                element: <CategoriesData></CategoriesData>,
                loader: ({params})=> fetch(`https://newsportal-server-developermmr.vercel.app/category/${params.id}`)
            }

        ]
    },
    {
        path:"/newsdetails/:id",
        element: <PrivateRoute><NewsDetails/></PrivateRoute>,
        loader: ({params})=>fetch(`https://newsportal-server-developermmr.vercel.app/news/${params.id}`)
    },
    {
        path:"/login",
        element: <LoginPage/>
    },
    {
        path:"/Registration",
        element: <Registration/>
    }
])
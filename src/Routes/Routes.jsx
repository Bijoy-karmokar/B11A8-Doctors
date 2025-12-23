import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/myBookings",
                Component:MyBookings
            },
            {
                path:"/blogs",
                Component:Blogs
            },
            {
                path:"/contactUs",
                Component:ContactUs
            }
        ]
    }
])
export default router;
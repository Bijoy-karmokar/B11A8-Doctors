import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Doctors from "../components/Doctors";
import DoctorDetails from "../pages/DoctorDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                index:true,
                Component:Home,
                hydrateFallbackElement:<p>Loading.....</p>,
                loader:()=> fetch('/doctors.json')
            },
            {
             path:"/doctor/:id",
             Component:DoctorDetails,
             loader:()=>fetch('/doctors.json')
            },
            {
                path:"/myBookings",
                Component:MyBookings,
                loader:()=>fetch('/doctors.json')
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
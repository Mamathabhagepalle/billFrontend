
import { createBrowserRouter } from "react-router-dom";
import Register from "../componets/user/Register";
import Login from "../componets/user/Login";
import Main from "../componets/user/main/Main";
import Home from "../componets/user/main/home/Home";
import About from "../componets/user/main/about/About";
import Addbills from "../componets/user/main/addbill/Addbills";
import FilterBills from "../componets/user/main/filterBills/FilterBills";

let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>

    },{
        path:"/",
        element:<Login></Login>
    },{
        path:"/home",
        element:<Main></Main>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:"about",
                element:<About></About>
            },{
                path:"addBills",
                element:<Addbills></Addbills>
            },{
                path:"filter",
                element:<FilterBills></FilterBills>
            }
        ]
    }
])

export default routes

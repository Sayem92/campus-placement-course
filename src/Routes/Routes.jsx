import LiveTest from "../components/livetest/LiveTest";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/home/Home");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([{
    path: '/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/liveTest',
            element:<LiveTest></LiveTest>
        },
    ]
}])
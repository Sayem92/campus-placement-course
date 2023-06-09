import ErrorPage from "../components/errorPage/ErrorPage";
import LiveTest from "../components/livetest/LiveTest";
import ResultPage from "../components/result/ResultPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/home/Home");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([{
    path: '/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
        {
            path:'/result',
            element:<ResultPage></ResultPage>
        },
    ]
}])
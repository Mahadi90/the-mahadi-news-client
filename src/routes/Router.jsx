import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/newsLayout";
import News from "../pages/news/news/News";
import SignInLayout from "../layout/SignInLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('http://localhost:5000/news')
            },
            {
                path : 'category/:id',
                element : <Category></Category>,
                loader : ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path : 'news',
        element : <NewsLayout></NewsLayout>,
        children : [
            {
                path : ':id',
                element : <PrivateRoutes>
                    <News></News>
                </PrivateRoutes>,
                loader : ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path : 'signIn',
        element : <SignInLayout></SignInLayout>,
        children : [
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
        ]
    }
])

export default router;
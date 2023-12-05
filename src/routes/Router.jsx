import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/newsLayout";
import News from "../pages/news/news/News";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'category/:id',
                element : <Category></Category>
            }
        ]
    },
    {
        path : 'news',
        element : <NewsLayout></NewsLayout>,
        children : [
            {
                path : ':id',
                element : <News></News>
            }
        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router";
import AboutPage from "../Pages/AboutPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../page/ContactPage";







const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,
    children:[
        {
            index:true,
            element:<HomePage/>
        },
        {
            path:"About",
            element:<AboutPage/>

        },
        {
           path:"Contact",
           element:<ContactPage/>

        },

    ]
  },
]);
    export default router

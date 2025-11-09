import {Outlet} from "react-router"
import {Footer} from "../shared/Footer"
import {Navber} from "../shared/Navber"

const Layout = () => {
    return (
        <>
        <Navber/>
        <Outlet/>
        <Footer/>
        </>
    )
}
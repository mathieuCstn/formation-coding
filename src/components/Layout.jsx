import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import './layout.css'

function Layout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout
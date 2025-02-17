import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar.tsx";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <ToastContainer/>
        </>
    )
}

export default MainLayout
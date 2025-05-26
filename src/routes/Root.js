import { Outlet } from "react-router";
import NavNavigation from "../components/MainNavigation";

function RootLayout(){
    return <>
        <NavNavigation />
        <h1>RootLayout</h1>
        <Outlet />
    </>
}

export default RootLayout;
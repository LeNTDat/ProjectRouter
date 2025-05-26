import { Outlet } from "react-router";
import NavNavigation from "../components/MainNavigation";

function RootLayout() {
    return <>
        <NavNavigation />
        <main >
            <Outlet />
        </main>
    </>
}

export default RootLayout;
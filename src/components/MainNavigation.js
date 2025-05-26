import { Link } from "react-router";

function NavNavigation() {
    return <header>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>HomePage</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={"/products"}>Products</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavNavigation;
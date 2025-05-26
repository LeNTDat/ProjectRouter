import { Link } from "react-router";
import classes from "../style/components/Navigation.module.css"

function NavNavigation() {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <Link to={"/"}>HomePage</Link>
                </li>
                <li>
                    <Link to={"/products"}>Products</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavNavigation;
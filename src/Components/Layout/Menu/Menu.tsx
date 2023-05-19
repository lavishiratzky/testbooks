import "./Menu.css";
import { Link } from "react-router-dom";
function Menu(): JSX.Element {
    return (
        <div className="Menu">
				<h1>Menu</h1>
            <Link to="search">Search</Link>
            <Link to="about">About</Link>
        </div>
    );
}

export default Menu;

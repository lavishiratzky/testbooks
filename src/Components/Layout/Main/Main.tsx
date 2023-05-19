import Routing from "../Routing/Routing";
import { Outlet } from "react-router-dom";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routing/>
			<Outlet/>
        </div>
    );
}

export default Main;

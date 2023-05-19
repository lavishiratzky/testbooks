import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../../App";
import About from "../../Pages/About/About";
import Page404 from "../../Pages/Page404/Page404";
import Search from "../../Pages/Search/Search";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
					<Routes>
                <Route path="/" element={<App/>}/>
                <Route path="search" element={<Search/>}/>
                <Route index element={<Search/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;

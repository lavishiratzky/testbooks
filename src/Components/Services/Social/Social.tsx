import "./Social.css";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
function Social(): JSX.Element {
    return (
        <div className="Social">
			<a href="https://www.linkedin.com/in/lavi-shiratzky/">
                <FaLinkedinIn size={36}/>
                </a>
                <a href="https://www.facebook.com/abamumin?mibextid=ZbWKwL">
            <FaFacebook size={36}/>
            </a>
        </div>
    );
}

export default Social;

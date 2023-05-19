import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
			<h1>About this App:</h1>
            <p>In this App you can find whatever book you want!</p>
            <p className="green" >Just type a name in the Searchbox </p>
        </div>
    );
}

export default About;

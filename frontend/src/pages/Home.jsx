import { Link } from "react-router-dom";
import { Button } from "../components/Button"
import "./home.css";

export const Home = () => {

    return (
        <div className="home-container">
            <h1>Welcome</h1>
            <Link to="/login"><Button className={"button"} btnText={"Get started"} /></Link>
        </div>
    )
}
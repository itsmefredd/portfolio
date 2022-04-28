import { Link } from "react-router-dom"

import Hello from "./../img/waiting.gif"

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>404 Page Not Found!</h1>
            <Link to="/home">Return to homepage</Link>
            <div>
                <img src={ Hello } className="not-found" alt="not-found"></img>
            </div>
        </div>
    )
};

export default NotFound; 
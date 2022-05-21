import { Link } from "react-router-dom"

import Hello from "./../img/construction.gif"

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>404 Page Not Found!</h1>
            <h1>Or page under construction! Sorry :(</h1>
            <div>
                <Link to="/home">Return to homepage</Link>
            </div>
            <div>
                <img src={ Hello } className="not-found" alt="not-found"></img>
            </div>
        </div>
    )
};

export default NotFound; 
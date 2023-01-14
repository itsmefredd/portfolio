import { Link } from "react-router-dom"

import ConstructionImage from "../../img/404/construction.gif"

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>404 Page Not Found!</h1>
            <h1>Or page under construction! Sorry :(</h1>
            <div>
                <Link to="/home">Return to homepage</Link>
            </div>
            <div>
                <img src={ ConstructionImage } className="not-found" alt="not-found"></img>
            </div>
        </div>
    )
};

export default NotFound; 
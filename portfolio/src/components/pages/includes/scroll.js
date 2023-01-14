import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This function will scroll the user's interface windown to the top. 
 * It is called everytime the user loads the window or reloads the page. 
 */
function Scroll() {
    const {pathname} = useLocation();

    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        [pathname]
    )
};

export default Scroll;
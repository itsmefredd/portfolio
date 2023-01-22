import React from "react";

import TechIcon from "./techIcon"

function TechIconList(props) {

    return (
        <div>
            {props.techList.map((tech) => {
                return(
                    <span>
                        <TechIcon techName={tech}/>&nbsp;
                    </span>
                )
            })}
        </div>
    )

};

export default TechIconList; 

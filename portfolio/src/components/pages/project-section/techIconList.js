import React from "react";

import TechIcon from "./techIcon"

function TechIconList(props) {

    return (
        <div>
            {props.techList.map((tech) => {
                return(
                    <>
                        <TechIcon techName={tech}/>&nbsp;
                    </>
                )
            })}
        </div>
    )

};

export default TechIconList; 

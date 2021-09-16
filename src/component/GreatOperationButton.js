// import React, { useState } from "react";
// import Calculator from './Calculator';



function GreatOperationButton(props) {




    return (
        <div className="GreatOperationButton">
            <button onClick={() => props.handleClick(props.value)}>{props.value}</button>

        </div>
    );
}

export default GreatOperationButton;
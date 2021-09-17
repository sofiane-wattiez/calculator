import React, { useState } from "react";
// import Calculator from './Calculator';



function GreatOperationButton(props) {





    return (

        <button id="ope" onClick={() => props.handleClick(props.value)}>{props.value}</button>


    );
}

export default GreatOperationButton;
import React, { useState } from "react";
// import Calculator from './Calculator';



function GreatOperationButton(props) {





    return (

        <button onClick={() => props.handleClick(props.value)}>{props.value}</button>


    );
}

export default GreatOperationButton;
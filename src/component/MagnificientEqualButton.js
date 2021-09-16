import React, { useState } from "react";


function MagnificientEqualButton(props) {
    // const [calc, setCalc] = useState("");



    // <MagnificientEqualButton name="" handleClick={handleClick} />
    return (
        <button onClick={() => props.handleClick(props.value)}>{props.value}</button>
    );
}

export default MagnificientEqualButton;
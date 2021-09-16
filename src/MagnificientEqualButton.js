import React, { useState } from "react";


function MagnificientEqualButton() {
    const [calc, setCalc] = useState("");

    const calculate = () => {
        // || '+' || '-' || '*' || '/'
        if (calc === '') {
            return;
        }
        const value = calc.slice(0);
        setCalc(value);
        setCalc(eval(calc).toString());


    }


    // <MagnificientEqualButton name="" handleClick={handleClick} />
    return (
        <button onClick={calculate}>=</button>
    );
}

export default MagnificientEqualButton;
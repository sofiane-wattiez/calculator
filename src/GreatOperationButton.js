import React, { useState } from "react";
// import Calculator from './Calculator';



function GreatOperationButton() {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }

        setCalc(calc + value);
        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());

        }
    }

    const deleteLast = () => {
        if (calc === "") {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    }


    return (
        <div className="GreatOperationButton">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>

            <button onClick={deleteLast}>DEL</button>
        </div>
    );
}

export default GreatOperationButton;
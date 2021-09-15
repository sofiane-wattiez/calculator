import React, { useState } from "react";


function MagnificientEqualButton() {

    const [result, setResult] = useState("");

    const [calc, setCalc] = useState("");
    // const [updateCalc, setUpdate] = useState('');

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
        const calculate = () => {
            // || '+' || '-' || '*' || '/'
            if (calc === '') {
                return;
            }
            const value = calc.slice(0);
            setCalc(value);
            setCalc(eval(calc).toString());


        }
    }
    return (<button onClick={result}>=</button>);
}

export default MagnificientEqualButton;
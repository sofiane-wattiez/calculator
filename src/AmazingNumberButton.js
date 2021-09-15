import React, { useState } from 'react';

function AmazingNumberButton() {


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
    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(

                <button
                    onClick={() => updateCalc(i.toString())
                    } key={i}>
                    {i}
                </button>
            )
        }
        return digits;
    }


    return (
        <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={result}>=</button>
        </div>
    );
}

export default AmazingNumberButton;

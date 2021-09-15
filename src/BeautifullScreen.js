import React, { useState } from 'react';

function BeautifullScreen() {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ['/', '*', '+', '-', '.'];

    const calculate = () => {
        // || '+' || '-' || '*' || '/'
        if (calc === '') {
            return;
        }
        const value = calc.slice(0);
        setCalc(value);
        setCalc(eval(calc).toString());


    }

    return (
        <div className="display">
            {result ? <span>({result})</span> : ''}
            &nbsp;
            {calc || "0"}
        </div>
    );

}


export default BeautifullScreen;

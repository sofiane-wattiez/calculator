import React, { useState } from 'react';

import TheTitle from './TheTitle';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';




function Calculator() {

    // useState sert a récuperer un état 
    // const [result, setResult] = useState("");
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ['/', '*', '+', '-', '.'];


    const [number, setNumber] = useState(''); // useState c'est global


    function handleClick(e) {
        console.log(e.target.value);
        const event = e.target.value

        setNumber(event)

    }

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


    const calculate = () => {
        // || '+' || '-' || '*' || '/'
        if (calc === '') {
            return;
        }
        const value = calc.slice(0);
        setCalc(value);
        setCalc(eval(calc).toString());


    }

    const deleteLast = () => {
        if (calc === "") {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    }




    return (
        <section className="Calculator">

            <TheTitle name="" />

            <BeautifullScreen number="0" onClick={number} />

            <GreatOperationButton name="" onClick={handleClick} />
            <div className="digits">
                <AmazingNumberButton name="" onClick={handleClick} />
                <MagnificientEqualButton name="" onClick={handleClick} />
            </div>


        </section >


    );

}



export default Calculator;

import React, { useState } from 'react';

import TheTitle from './TheTitle';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';




function Calculator() {

    const [ScreenView, setScreenView] = useState(''); // useState sert a récuperer un état 

    const [result, setResult] = useState("");
    // const [calc, setCalc] = useState("");
    // const [result, setResult] = useState("");
    // const ops = ['/', '*', '+', '-', '.'];
    function handleClick(e) {
        e.preventDefault();
        console.log(e.target.value);
        const event = e.target.value

        setScreenView(event)

    }

    return (
        <section className="Calculator">

            <TheTitle name="" />

            <BeautifullScreen number="" ScreenView={ScreenView} />

            <GreatOperationButton name="" handleClick={handleClick} />

            <AmazingNumberButton name="" handleClick={handleClick} />


            <MagnificientEqualButton name="" handleClick={handleClick} />

        </section >


    );


}

export default Calculator;

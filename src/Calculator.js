import React, { useState } from 'react';

import TheTitle from './TheTitle';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';




function Calculator() {

    // const [calc, setCalc] = useState("");
    // const [result, setResult] = useState("");
    // const ops = ['/', '*', '+', '-', '.'];

    return (
        <section className="Calculator">
            <div className="TheTitle">
                <TheTitle />
            </div>
            <div className="BeautifullScreen">
                <BeautifullScreen name="" />
            </div>
            <div className="GreatOperationButton">
                <GreatOperationButton name="" />
            </div>
            <div className="AmazingNumberButton">
                <AmazingNumberButton name="1" />
                <AmazingNumberButton name="2" />
                <AmazingNumberButton name="3" />
                <AmazingNumberButton name="4" />
                <AmazingNumberButton name="5" />
                <AmazingNumberButton name="6" />
                <AmazingNumberButton name="7" />
                <AmazingNumberButton name="8" />
                <AmazingNumberButton name="9" />
            </div>
            <div className="MagnificientEqualButton">
                <MagnificientEqualButton name="=" />
            </div>
        </section>


    );


}

export default Calculator;

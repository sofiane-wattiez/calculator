import React, { useState } from 'react';

import TheTitle from './component/TheTitle';
import AmazingNumberButton from './component/AmazingNumberButton';
import BeautifullScreen from './component/BeautifullScreen';
import GreatOperationButton from './component/GreatOperationButton';
import MagnificientEqualButton from './component/MagnificientEqualButton';




function Calculator() {


    const [value, setValue] = useState(""); // useState c'est global
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    // const ops = ['/', '*', '+', '-', '.'];

    // Créer une fonction pour le résultat + 
    // une fonction pour l'affichage + une pour reset


    const handleClick = (e) => {
        // console.log(e.target.value);
        setValue(calc.concat(e.target.value));

    }

    const

    return (
        <section className="Calculator">

            <TheTitle value="Calculator9000" />

            <BeautifullScreen value={value} />

            <GreatOperationButton value={"/"} handleClick={handleClick} />
            <GreatOperationButton value={"*"} handleClick={handleClick} />
            <GreatOperationButton value={"+"} handleClick={handleClick} />
            <GreatOperationButton value={"-"} handleClick={handleClick} />
            <GreatOperationButton value={"C"} handleClick={handleClick} />
            <div className="digits">
                <AmazingNumberButton value={"0"} handleClick={handleClick} />
                <AmazingNumberButton value={"1"} handleClick={handleClick} />
                <AmazingNumberButton value={"2"} handleClick={handleClick} />
                <AmazingNumberButton value={"3"} handleClick={handleClick} />
                <AmazingNumberButton value={"4"} handleClick={handleClick} />
                <AmazingNumberButton value={"5"} handleClick={handleClick} />
                <AmazingNumberButton value={"6"} handleClick={handleClick} />
                <AmazingNumberButton value={"7"} handleClick={handleClick} />
                <AmazingNumberButton value={"8"} handleClick={handleClick} />
                <AmazingNumberButton value={"9"} handleClick={handleClick} />

                <MagnificientEqualButton value={"="} handleClick={handleClick} />
            </div>


        </section >


    );

}



export default Calculator;

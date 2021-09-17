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
    const ops = ['/', '*', '+', '-', '.'];

    // Créer une fonction pour le résultat + 
    // une fonction pour l'affichage + une pour reset


    const handleClick = (e) => {
        // console.log(e.target.value);
        setValue(calc.concat(e.target.value));
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
    // const deleteLast = () => {
    //     if (calc === "") {
    //         return;
    //     }
    //     const value = calc.slice(0, -1);
    //     setCalc(value);
    // }



    return (
        <section className="Calculator">

            <TheTitle value="Calculator9000" />

            <BeautifullScreen value={result} />

            <GreatOperationButton value={"/"} handleClick={updateCalc} />
            <GreatOperationButton value={"*"} handleClick={updateCalc} />
            <GreatOperationButton value={"+"} handleClick={updateCalc} />
            <GreatOperationButton value={"-"} handleClick={updateCalc} />
            <GreatOperationButton value={"C"} handleClick={updateCalc} />
            <div className="digits">
                <AmazingNumberButton value={"0"} handleClick={updateCalc} />
                <AmazingNumberButton value={"1"} handleClick={updateCalc} />
                <AmazingNumberButton value={"2"} handleClick={updateCalc} />
                <AmazingNumberButton value={"3"} handleClick={updateCalc} />
                <AmazingNumberButton value={"4"} handleClick={updateCalc} />
                <AmazingNumberButton value={"5"} handleClick={updateCalc} />
                <AmazingNumberButton value={"6"} handleClick={updateCalc} />
                <AmazingNumberButton value={"7"} handleClick={updateCalc} />
                <AmazingNumberButton value={"8"} handleClick={updateCalc} />
                <AmazingNumberButton value={"9"} handleClick={updateCalc} />

                <MagnificientEqualButton value={"="} handleClick={calculate} />
            </div>


        </section >


    );

}



export default Calculator;

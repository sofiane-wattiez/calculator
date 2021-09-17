import React, { useState } from 'react';
import * as math from 'mathjs';

import TheTitle from './component/TheTitle';
import AmazingNumberButton from './component/AmazingNumberButton';
import BeautifullScreen from './component/BeautifullScreen';
import GreatOperationButton from './component/GreatOperationButton';
import MagnificientEqualButton from './component/MagnificientEqualButton';




function Calculator() {

    // useState c'est un état global à définir
    const [value, setValue] = useState("");
    const [calc, setCalc] = useState("");
    // const [over, over9000] = useState("");




    const handleClick = (e) => {
        // console.log(e.target.value);
        setValue((value) => [...value, e]);

    }




    const calculate = () => {
        let lastValue = value.slice(-1);
        if (isNaN(lastValue)) {
            return;
        } else {
            const calc = value.join(""); // remove Last value
            setCalc(math.evaluate(calc));
        }

    }

    const deleteAll = () => {
        setValue("");
        setCalc("");
    }

    return (
        <section className="Calculator">

            <TheTitle value="Calculator9000" />

            <BeautifullScreen value={value} calc={calc} />

            <div className="digits">

                <AmazingNumberButton value="1" handleClick={handleClick} />
                <AmazingNumberButton value="2" handleClick={handleClick} />
                <AmazingNumberButton value="3" handleClick={handleClick} />
                <AmazingNumberButton value="4" handleClick={handleClick} />
                <AmazingNumberButton value="5" handleClick={handleClick} />
                <AmazingNumberButton value="6" handleClick={handleClick} />
                <AmazingNumberButton value="7" handleClick={handleClick} />
                <AmazingNumberButton value="8" handleClick={handleClick} />
                <AmazingNumberButton value="9" handleClick={handleClick} />
                <AmazingNumberButton value="." handleClick={handleClick} />
                <AmazingNumberButton value="0" handleClick={handleClick} />




            </div>
            <div className="GreatOperationButton">
                <GreatOperationButton value="/" handleClick={handleClick} />
                <GreatOperationButton value="*" handleClick={handleClick} />
                <GreatOperationButton value="+" handleClick={handleClick} />
                <GreatOperationButton value="-" handleClick={handleClick} />

                <GreatOperationButton value="DEL" handleClick={deleteAll} />
                <MagnificientEqualButton value="=" handleClick={calculate} />

            </div>


        </section >


    );

}



export default Calculator;

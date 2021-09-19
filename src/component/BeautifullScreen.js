import React, { useState } from 'react';
// import Calculator from './Calculator';

function BeautifullScreen(props) {
    // const [result, setResult] = useState(''); // useState c'est global
    // const [calc, setCalc] = useState(''); // useState c'est global
    // const [value, setValue] = useState('')





    return (
        <div className="input">
            <h2 >{props.value}</h2>

            <h3>{props.calc}</h3>
        </div >
    );

}


export default BeautifullScreen;

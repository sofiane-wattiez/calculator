import React, { useState, useEffect } from 'react';
// import Calculator from './Calculator';

function BeautifullScreen(props) {
    // const [result, setResult] = useState(''); // useState c'est global
    // const [calc, setCalc] = useState(''); // useState c'est global
    // const [screenView, setScreenView] = useState('')





    return (
        <div className="display">
            <h2 value={props.value}>{props.value}</h2>
        </div>
    );

}


export default BeautifullScreen;

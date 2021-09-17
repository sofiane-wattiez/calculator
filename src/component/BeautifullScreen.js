import React, { useState, useEffect } from 'react';
// import Calculator from './Calculator';

function BeautifullScreen(props) {
    // const [result, setResult] = useState(''); // useState c'est global
    const [calc, setCalc] = useState(''); // useState c'est global
    const [value, setValue] = useState('')





    return (
        <div className="BeatifullScreen">
            <h2 value={props.value}>{props.value}</h2>
            {/* {value ? <span>({value})</span> : ''}
            &nbsp;
            {calc || "0"} */}
        </div>
    );

}


export default BeautifullScreen;

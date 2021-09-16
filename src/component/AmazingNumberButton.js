import React, { useState } from 'react';
// import MagnificientEqualButton from './MagnificientEqualButton';

function AmazingNumberButton(props) {



    return (
        <div >

            <button onClick={() => props.handleClick(props.value)}>{props.value}</button>

        </div >
    );

}
export default AmazingNumberButton;

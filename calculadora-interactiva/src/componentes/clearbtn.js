import React from "react";
import '../assets/btnclear.css';

const BtnClear = (props) => (
    <div className='btnclear' onClick={props.manejarClear}>
        {props.children}
    </div>
);
export default BtnClear;
import React from 'react';
import "./input.css"

/** Components */

interface IInput {
    icon?: string;
    onChange?: Function;
}

const Input: React.FC<IInput> = ({ icon, onChange }) => {
    return (
        <div className="input">
            <input type="text" placeholder="Buscar aquí producto" onChange={(event) => onChange ? onChange(event) : null}></input>
            <div className="input_icon"><img src={icon} alt=""></img></div>
        </div>
    )
}

export default Input;
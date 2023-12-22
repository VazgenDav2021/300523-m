import { useState } from "react";
import classes from './type.module.css';

const Janis = () => {
    const buttonsValues = ['primary', 'error', 'info']
    const [type, setType] = useState('primary');

    const handleOnClick = (event) => {
        setType(() => event.target.value)
    };

    return (
        <div>
            {buttonsValues.map((eachValue, index) => {
                return <button onClick={handleOnClick} key={index} value={eachValue}>{eachValue}</button>
            })}
            <div className={`${classes.box} ${classes[type]}`}></div>
        </div>
    );
};

export default Janis;
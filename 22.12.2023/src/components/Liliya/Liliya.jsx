import { useState } from "react";


const buttons = ['primary', 'error', 'info'];

const App = () => {
    const [type, setType] = useState("");

    const changeButtonClick = (newType) => {
        setType(newType);
    };

    return (
        <div className="App">
            <div className={`box ${type}`}></div>
            <div>
                {buttons.map((eachButton, index) => (
                    <button key={index} onClick={changeButtonClick} value={eachButton}>eachButton</button>
                ))}
            </div>
        </div>
    );
};
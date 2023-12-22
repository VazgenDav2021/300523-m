import React, { useState } from 'react';
import './App.css';

const buttonTypes = ['primary', 'error', 'info'];

function App() {
    const [type, setType] = useState('');

    const handleButtonClick = (buttonType) => {
        setType(buttonType);
    };

    return (
        <div className="App">
            {buttonTypes.map((buttonType) => (
                <button key={buttonType} onClick={() => handleButtonClick(buttonType)}>
                    {buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}
                </button>
            ))}
            <div className={`box ${type}`}></div>
        </div>
    );
}

export default App;
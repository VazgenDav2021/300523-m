import React, { useState } from "react";
import './App.css'; 

const App = () => {
    const [type, setType] = useState('');

    const changeButtonClick = (value) => {
        setType(value);
    };

    return (
        <div className="App">
            <div className={`box ${type}`}>
                <p>Box with {type} style</p>
            </div>
            <div>
                <button className="primary" onClick={() => changeButtonClick('primary')}>Primary</button>
                <button className="error" onClick={() => changeButtonClick('error')}>Error</button>
                <button className="info" onClick={() => changeButtonClick('info')}>Info</button>
            </div>
        </div>
    );
};

export default App;
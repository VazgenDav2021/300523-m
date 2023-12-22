import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
    const [type, setType] = useState("primary");

    const setTypeFunc = (value) => {
        setType(value);
    };
    return (
        <div>
            <button onClick={() => setTypeFunc("primary")}>Primary</button>
            <button onClick={() => setTypeFunc("error")}>Error</button>
            <button onClick={() => setTypeFunc("info")}>Info</button>
            <div>
                <div className={`container ${type}`}></div>
            </div>
        </div>
    );
}

export default App;


// .primary {
//     background - color: yellow;
// }

// .error {
//     background - color: red;
// }

// .info {
//     background - color: green;
// }
// .container {
//     height: 200px;
//     width: 200px;
//     border: 1px solid black;
// }
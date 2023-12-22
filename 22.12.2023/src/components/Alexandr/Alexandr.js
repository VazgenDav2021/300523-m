import { useState } from "react";

function Alexandr() {
    const [type, setType] = useState([]);

    return (
        <div className="App">
            <button className='primary' onClick={() => setType('primary')}>Primary</button>
            <button className='error' onClick={() => setType('error')}>Error</button>
            <button className='info' onClick={() => setType('info')}>Info</button>
            <div className={`box ${type}`}>Тот самый див</div>
        </div>
    );
}

import { useState } from "react";

const App = () => {
    const [type, setType] = useState('');

    const handleButtonClick = (buttonType) => {
        setType(buttonType);
    };

    return (
        <div>
            <div className='main'>
                <button onClick={() => handleButtonClick('primary')}>Primary</button>
                <button onClick={() => handleButtonClick('error')}>Error</button>
                <button onClick={() => handleButtonClick('info')}>Info</button>
            </div>
            <div className='main'>
                <div className={`box ${type}`}>


                </div>
            </div>
        </div>
    );
};

export default App;
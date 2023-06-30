import React, { useState } from 'react';

const ButtonClick = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    return (
        <div>
            <p>{clicked ? "You Clicked!" : "Please Click!"}</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

export default ButtonClick;
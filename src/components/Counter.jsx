import React, { useState } from 'react';
/**
 * useState 활용하기
 */
function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => setNumber((curr) => curr + 1);
    const onDecrease = () => setNumber((curr) => curr - 1);
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

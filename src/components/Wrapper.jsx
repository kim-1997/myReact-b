import React from 'react';
/**
 * 컴포넌트 안 컴포넌트 children 사용해보기
 */
function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return <div style={style}>{children}</div>;
}

export default Wrapper;

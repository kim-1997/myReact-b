import React from 'react';
/**
 * 논리연산을 이용한 조건부 렌더링
 */
function Hello({ name, isSpecial }) {
    return (
        <div>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음',
};

export default Hello;

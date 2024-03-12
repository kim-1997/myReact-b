import React, { useRef, useState } from 'react';
/**
 * 여러개의 input 상태 관리하기 & useRef
 */
function InputSample2() {
    const nameInput = useRef();
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input ref={nameInput} name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>이름: {name}</b>
                <br />
                <b>닉네임: {nickname}</b>
            </div>
        </div>
    );
}

export default InputSample2;

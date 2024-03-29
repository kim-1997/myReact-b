import React, { useEffect } from 'react';
/**
 * 배열 추가
 */
function CreateUser({ username, email, onChange, onCreate }) {
    useEffect(() => {
        console.log('렌더링');
    });
    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);

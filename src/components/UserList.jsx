import React, { useContext } from 'react';
import { UserDispatch } from '../App2';
/**
 * 배열 렌더링 & 삭제
 */
const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch);
    return (
        <div className="user">
            <b style={{ color: user.active && 'red' }} onClick={dispatch({ type: 'TOGGLE_USER', id: user.id })}>
                {user.username}
            </b>
            <span>{user.email}</span>
            <button onClick={dispatch({ type: 'REMOVE_USER', id: user.id })}>삭제</button>
        </div>
    );
});

function UserList({ users }) {
    return (
        <div className="userList">
            {users.map((value) => (
                <User user={value} key={value.id} />
            ))}
        </div>
    );
}

export default React.memo(UserList);

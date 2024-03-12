import React from 'react';
/**
 * 배열 렌더링 & 삭제
 */
function User({ user, onRemove, onToggle }) {
    return (
        <div className="user">
            <b style={{ color: user.active && 'red' }} onClick={() => onToggle(user.id)}>
                {user.username}
            </b>
            <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div className="userList">
            {users.map((value) => (
                <User user={value} key={value.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList;

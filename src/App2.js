import './App.css';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import { useMemo, useRef, useState, useCallback, useReducer } from 'react';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter((it) => it.active).length;
}
const initialState = {
    inputs: {
        username: '',
        email: '',
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ],
};
function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT': {
            const { name, value } = action;
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [name]: value,
                },
            };
        }
        case 'CREATE_USER': {
            const { user } = action;
            return {
                inputs: initialState.inputs,
                users: [...state.users, user],
            };
        }
        case 'TOGGLE_USER': {
            const { targetId } = action;
            return {
                ...state,
                users: state.users.map((it) => (it.id === targetId ? { ...it, active: !it.active } : it)),
            };
        }
        case 'REMOVE_USER': {
            const { targetId } = action;
            return {
                ...state,
                users: state.users.filter((it) => it.id !== targetId),
            };
        }
        default:
            return state;
    }
}

function App2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);
    const { users } = state;
    const { username, email } = state.inputs;

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value,
        });
    });
    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        nextId.current += 1;
    }, [username, email]);
    const onToggle = useCallback((targetId) => {
        dispatch({
            type: 'TOGGLE_USER',
            targetId,
        });
    }, []);
    const onRemove = useCallback((targetId) => {
        dispatch({
            type: 'REMOVE_USER',
            targetId,
        });
    }, []);
    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App2;

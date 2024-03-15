import './App.css';
// import Hello from './components/Hello';
// import Wrapper from './components/Wrapper';
// import Counter from './components/Counter';
// import InputSample from './components/InputSample';
// import InputSample2 from './components/InputSample2';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import { useMemo, useRef, useState, useCallback } from 'react';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter((it) => it.active).length;
}

function App() {
    const [users, setUsers] = useState([
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
    ]);

    const nextId = useRef(4);
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [name]: value,
        }));
    }, []);

    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        setUsers([...users, user]);
        // setUsers(users.concat(user));
        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback((targetId) => {
        setUsers((users) => users.filter((it) => it.id !== targetId));
    }, []);

    const onToggle = useCallback((targetId) => {
        setUsers((users) => users.map((it) => (it.id === targetId ? { ...it, active: !it.active } : it)));
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <div>
            {/* <Wrapper> */}
            {/* <Hello name="react" isSpecial={true} />
                <Hello name="typescript" isSpecial={false} />
                <hr />
                <Counter />
                <hr />
                <InputSample />
                <hr />
                <InputSample2 />
                <hr /> */}
            <CreateUser id={users.id} username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
            {/* </Wrapper> */}
        </div>
    );
}

export default App;

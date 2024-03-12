import './App.css';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import InputSample2 from './components/InputSample2';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import { useRef, useState } from 'react';

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

    const onChnage = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onCreate = () => {
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
    };

    const onRemove = (targetId) => {
        setUsers(users.filter((it) => it.id !== targetId));
    };

    const onToggle = (targetId) => {
        setUsers(users.map((it) => (it.id === targetId ? { ...it, active: !it.active } : it)));
    };

    return (
        <div>
            <Wrapper>
                <Hello name="react" isSpecial={true} />
                <Hello name="typescript" isSpecial={false} />
                <hr />
                <Counter />
                <hr />
                <InputSample />
                <hr />
                <InputSample2 />
                <hr />
                <CreateUser id={users.id} username={username} email={email} onChange={onChnage} onCreate={onCreate} />
                <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            </Wrapper>
        </div>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import EachUser from './components/EachUser/EachUser';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data); // ?
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="App">
            <h1>Список пользователей</h1>
            <div className="user-list">
                {users.map(user => (
                    <EachUser key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default App;
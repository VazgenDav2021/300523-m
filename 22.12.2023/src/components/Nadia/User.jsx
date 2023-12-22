import React, { useState, useEffect } from 'react';
import EachUser from '../src/components/EachUser/EachUser';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            await fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setUsers(data); // ????
                })
                .catch((error) => {
                    console.error('Error fetching users:', error);
                });
        };

        fetchUsers();
    }, []);

    return (
        <div className="App">
            {users.map((user) => (
                <EachUser key={user.id} user={user} />
            ))}
        </div>
    );
};

export default App;
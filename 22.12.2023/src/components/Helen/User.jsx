import React, { useState, useEffect } from 'react';
import EachUser from './EachUser';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(...data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <EachUser key={user.id} user={user} />
            ))}
        </div>
    );
};

export default App;
import { useEffect, useState } from "react";

export const EachUser = ({ name, username, email }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
};

function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data) /// ???
        }
        fetchUsers();
    }, [])
    return (
        <div className="App">
            {users.map((user) => (
                <EachUser key={user.id} {...user} />
            ))}
        </div>
    );
}
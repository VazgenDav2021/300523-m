import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(() => ([...data]))
        };
        fetchUsers()
    }, [])
    return (
        <div className="App">
            {users.map((user) => (
                <User
                    key={user.id}
                    {...user}
                />
            ))}
        </div>
    );
}
export default App;
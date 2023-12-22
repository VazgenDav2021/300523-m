import { useEffect, useState } from "react";


const EachUser = ({ id, name, username, email }) => {
    return (
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
};


const UserList2 = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            setUsers(()=>([...data]));
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    fetchUsers();
}, [])
return (
    <div>
        {users.map((user) => (
            <EachUser
                key={user.id}
                {...user}
            />
        ))}
    </div>
);
};

export default UserList2;
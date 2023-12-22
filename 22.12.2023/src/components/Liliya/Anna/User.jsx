import { useEffect, useState } from "react"
import { User } from "../User/User"

export const UserList = () => {
    const [userList, setUserList] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUserList(data.users) // ??? 
        }
        fetchUsers()
    }, [])
    return <div>
        {userList.map((user) => (
            <User key={user.id} {...user} />
        ))}
    </div>
}

// export const User = ({ name, username, email }) => {
//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>{username}</p>
//             <p>{email}</p>

//         </div>
//     )
// }
import React, { useState } from 'react'

const users = [{ name: "Mani", age: 24 }, { name: "Nishanth", age: 25 }, { name: "Maha", age: 25 }]

const UserSearch: React.FC = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    const searchHandler = () => {
        const foundUser = users.find((user) => { return user.name === name })
        setUser(foundUser);
    }

    return (
        <div>UserSearch
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={searchHandler}>Find user</button>
            <div>
                {/* {user && user.name} */}
                {user?.name}
                {user?.age}
            </div>
        </div>
    )
}

export default UserSearch
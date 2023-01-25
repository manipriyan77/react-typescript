import React, { useState, useRef, useEffect } from 'react'

const users = [{ name: "Mani", age: 24 }, { name: "Nishanth", age: 25 }, { name: "Maha", age: 25 }]

const UserSearchRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState("");
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const searchHandler = () => {
        const foundUser = users.find((user) => { return user.name === name })
        setUser(foundUser);
    }

    return (
        <div>UserSearchRef
            <input type="text" ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <button onClick={searchHandler}>Find user</button>
            <div>
                {/* {user && user.name} */}
                {user?.name}
                {user?.age}
            </div>
        </div>
    )
}

export default UserSearchRef
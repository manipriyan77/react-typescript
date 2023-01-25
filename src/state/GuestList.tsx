import React, { useState } from 'react'

const GuestList: React.FC = () => {

    const [name, setName] = useState("")
    const [guest, setGuest] = useState<string[]>([])

    const addGuestHandler = () => {
        setName("")
        setGuest([...guest, name])
    }

    return (
        <div>
            <h3>Guest List</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addGuestHandler}>Add Guest</button>
            <ul>
                {guest.map((guests, i) => {
                    return <li key={i}>{guests}</li>
                })}
            </ul>
        </div>
    )
}

export default GuestList
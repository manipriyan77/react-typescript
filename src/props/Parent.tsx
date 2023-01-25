import React from 'react'
import { ChildAsFC } from './Child'

const Parent = () => {
    return (
        <ChildAsFC color='blue' onClick={() => console.log("hello")} >
            hgj
        </ChildAsFC>

    )
}

export default Parent
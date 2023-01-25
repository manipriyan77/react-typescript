import React from 'react'

const EventComponent: React.FC = () => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    }

    const dragEventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e);

    }

    return (
        <div>
            <input type="text" onChange={changeHandler} />
            <div draggable onDragStart={dragEventHandler}>
                Drag me
            </div>
        </div>
    )
}

export default EventComponent
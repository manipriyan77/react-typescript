import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode
}

export const Child = (props: ChildProps) => {
    return (
        <div>
            {props.color}
            <button onClick={props.onClick}>Click me</button>
        </div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Click me</button>
        </div>)
}

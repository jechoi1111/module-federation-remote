import React from 'react';

export type ButtonProps = {
    onClick: () => void
}

const Button = ({onClick}:ButtonProps) => {
    return (
        <button onClick={onClick}>
            Click1
        </button>
    );
};

export {Button};

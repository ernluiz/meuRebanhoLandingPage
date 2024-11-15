import React from 'react';
import "../../styles/buttons.css";

interface IButtonProps {
    text: string;
    secondary?: boolean;
    func: (e: React.FormEvent) => void;
    disabled?: boolean;
}

export default function Button({ text, secondary, func, disabled }: IButtonProps) {
    return (
        <button
            className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`}
            onClick={func}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

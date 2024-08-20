import React from 'react';
import './Button.scss';

interface ButtonProps {
    displayText: string
}

const Button: React.FC<ButtonProps> = ({ displayText }) => {
    return (
        <div className="button-container">
            {displayText}
        </div>
    );
};

export default Button;

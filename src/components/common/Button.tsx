import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
    className?: string;
    as?: 'button' | 'a';
    href?: string;
    target?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', as = 'button', href, ...props }) => {
    const baseClass = `btn btn-${variant} ${className}`;
    
    if (as === 'a') {
        return (
            <a href={href} className={baseClass} {...(props as any)}>
                {children}
            </a>
        );
    }

    return (
        <button className={baseClass} {...props}>
            {children}
        </button>
    );
};

export default Button;

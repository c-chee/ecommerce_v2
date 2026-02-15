'use client';

export default function IconButton({ onClick, children, className }) {
    return (
        <button onClick={onClick} className={`text-white ${className ?? ''}`}>
            {children}
        </button>
    );
}

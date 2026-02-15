'use client';

export default function BoxButton({
    children,
    onClick,
    className = "",
    type = "button",
    }) {
    return (
        <button
        type={type}
        onClick={onClick}
        className={`
            relative overflow-hidden
            px-8 py-[5px]
            border border-white
            text-white
            rounded-md
            font-medium
            group
            transition-colors duration-300
            hover:border-[var(--orange)]
            cursor-pointer
            ${className}
        `}
        >
        {/* Sliding background */}
        <span
            className="
            absolute inset-0
            bg-[var(--orange)]
            scale-x-0
            group-hover:scale-x-100
            origin-left
            transition-transform duration-600 ease-in-out
            "
        />

        {/* Button text */}
        <span className="relative z-10 group-hover:text-black">
            {children}
        </span>
        </button>
    );
}

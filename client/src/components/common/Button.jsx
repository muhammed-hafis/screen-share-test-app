import React from "react";

function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
    disabled = false,
    type = "button",
}) {
    const baseStyle =
        "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

    const variants = {
        primary:
            "bg-neutral-800 text-white/70 border border-neutral-700 hover:bg-neutral-700 focus:ring-neutral-600",

        secondary:
            "bg-transparent text-white/70 border border-neutral-700 hover:bg-neutral-800 focus:ring-neutral-600",

        danger:
            "bg-red-700 text-white border border-red-600 hover:bg-red-600 focus:ring-red-500",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${baseStyle}
        ${variants[variant] || variants.primary}
        ${className}
      `}
        >
            {children}
        </button>
    );
}

export default Button;
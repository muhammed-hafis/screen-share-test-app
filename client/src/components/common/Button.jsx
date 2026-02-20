import React from "react";

function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
    disabled = false,
    type = "button"
}) {
    const baseStyle =
        "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-blue-600 hover:bg-blue-700 text-white shadow-md focus:ring-blue-500",
        secondary:
            "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400",
        danger:
            "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
        success:
            "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
        outline:
            "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${baseStyle}
        ${variants[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
        >
            {children}
        </button>
    );
}

export default Button;
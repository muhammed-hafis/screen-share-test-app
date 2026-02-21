import React from "react";

function Badge({ children, variant = "default", className = "" }) {
    const baseStyle =
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border";

    const variants = {
        default: "bg-gray-800/80 text-gray-300 border-gray-700",
        danger: "bg-red-600/20 text-red-400 border-red-500/40",
        live: "bg-green-600/20 text-green-400 border-green-500/40",
    };

    return (
        <div className={`${baseStyle} ${variants[variant] || variants.default} ${className}`}>
            {children}
        </div>
    );
}

export default Badge;
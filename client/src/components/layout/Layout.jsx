import React from "react";

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 sm:p-6">
            <div className="w-full h-full sm:h-auto sm:max-w-6xl sm:aspect-video bg-neutral-900 rounded-sm sm:shadow-2xl sm:shadow-black/50 sm:border sm:border-neutral-800 flex items-center justify-center overflow-hidden">
                {children}
            </div>
        </div>
    );
}

export default Layout;
import React from "react";

export default function Card({children, className}) {
    return (
        <div className={`bg-white overflow-hidden shadow rounded-lg m-6 ${className}`}>
            {children}
        </div>
    );
}
import React from "react";

export default function CardBody({children, className}) {
    return (
        <div className={`px-4 py-5 sm:p-6 ${className}`}>
            {children}
        </div>
    );
}
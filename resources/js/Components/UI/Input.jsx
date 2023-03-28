import React from "react";

export default function Input({
    label,
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    smallId,
    smallText,
    error,
}) {
    return (
        <div className="relative my-6 mx-auto">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1">
                <input
                    type={type}
                    name={name}
                    id={id}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
            {smallText && (
                <p id={smallId} className="mt-2 text-sm text-gray-500">
                    {smallText}
                </p>
            )}
            {error && (
                <p className="mt-2 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    )
}

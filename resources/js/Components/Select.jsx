import React from 'react';

export default function Select({
    name,
    value,
    className,
    required,
    handleChange,
    options,
}) {
    return (
        <div className="flex flex-col items-start">
            <select
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                required={required}
                onChange={handleChange}
            >
                <option value="">Select {name}</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

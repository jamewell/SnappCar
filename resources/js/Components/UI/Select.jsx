import React from "react";

export default function Select({data, id, name, label, value, onChange, className, error, required, placeholder}) {
    return (
        <div className={"relative my-6 mx-auto " + className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1">
                <select
                    id={id}
                    name={name}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={value}
                    onChange={onChange}
                    required={required}
                >
                    <option value="">{placeholder}</option>
                    {data.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            {error && (
                <p className="mt-2 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );

}
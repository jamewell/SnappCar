import React from 'react';
import InputError from "@/Components/InputError";
import Select from "@/Components/Select";
import InputLabel from "@/Components/InputLabel";

export default function FormSelect({ label, name, value, handleChange, options, error, required }) {
    return (
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-1">
            <InputLabel forInput={name} value={label} />
            <Select
                name={name}
                value={value}
                className="mt-1 block w-full"
                handleChange={handleChange}
                options={options}
                required={required}
            />
            <InputError message={error} className="mt-2" />
        </div>
    )
}

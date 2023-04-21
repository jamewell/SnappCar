import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function FormInput({ label, name, type, value, handleChange, error, required }) {
    return (
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-1">
            <InputLabel forInput={name} value={label} />
            <TextInput
                type={type}
                name={name}
                value={value}
                className="mt-1 block w-full"
                autoComplete={name}
                isFocused={true}
                handleChange={handleChange}
                required={required}
            />
            <InputError message={error} className="mt-2" />
        </div>
    )
}

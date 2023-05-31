import React from 'react';
import InputError from "@/Components/InputError";
import Select from "@/Components/Select";
import InputLabel from "@/Components/InputLabel";

export default function FormSelect({
   label,
   name,
   value,
   handleChange,
   options,
   error,
   required,
   divClassName,
   selectClassName,
   labelClassName,
}) {
    return (
        <div className={divClassName}>
            <InputLabel forInput={name} value={label} className={labelClassName} />
            <Select
                name={name}
                value={value}
                className={selectClassName}
                handleChange={handleChange}
                options={options}
                required={required}
            />
            <InputError message={error} className="mt-2" />
        </div>
    )
}

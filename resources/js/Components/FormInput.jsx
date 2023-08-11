import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function FormInput({
  label,
  name,
  type,
  value,
  placeholder,
  handleChange,
  error,
  required,
  readOnly = false,
  divClassName,
  inputClassName,
  labelClassName,
}) {
    return (
        <div className={divClassName}>
            <InputLabel forInput={name} value={label} className={labelClassName} />
            <TextInput
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                className={inputClassName}
                autoComplete={name}
                isFocused={true}
                readOnly={readOnly}
                handleChange={handleChange}
                required={required}
            />
            <InputError message={error} className="mt-2" />
        </div>
    )
}

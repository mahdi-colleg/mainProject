import {UseFormRegisterReturn, FieldErrors} from "react-hook-form";
import React, {useId} from "react";
import {ErrorMessage} from "@/components";

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    type?: "text" | "password" | "email" | "tel" | "number" | "url";
    label?: string;
    register: UseFormRegisterReturn<any>;
    errors: FieldErrors<any>;
}

export function Input({type = "text", label, register, errors, ...rest}: Props) {

    const id = useId();
    const name = register.name;
    let hasError = false;
    if (errors && errors[name]) {
        hasError = true;
    }


    return (
        <div>
            <div className={"flex flex-col items-start gap-2"}>
                {label && <label className={"font-bold text-nowrap"} htmlFor={id}>{label}:</label>}
                <input className={`w-[500px] block rounded-lg border p-4 ${hasError && 'border-red'}`} id={id} type={type} {...rest} {...register} />
            </div>
            <ErrorMessage errors={errors} name={name}/>
        </div>

    );
}
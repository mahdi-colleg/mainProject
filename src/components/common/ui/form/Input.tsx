import {UseFormRegisterReturn, FieldErrors} from "react-hook-form";
import {useId} from "react";
import {ErrorMessage} from "@/components";

interface Props {
    type?: "text" | "password" | "email" | "tel" | "number" | "url";
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
    errors: FieldErrors<any>;
}

export function Input({type = "text", label, placeholder = "", register, errors}: Props) {

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
                <input className={`w-[500px] block rounded-lg border p-4 ${hasError && 'border-red'}`} id={id} type={type} placeholder={placeholder} {...register} />
            </div>
            <ErrorMessage errors={errors} name={name}/>
        </div>

    );
}
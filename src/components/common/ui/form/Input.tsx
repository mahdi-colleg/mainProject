import {UseFormRegisterReturn} from "react-hook-form";
import {useId} from "react";

interface Props {
    type?: "text" | "password" | "email" | "tel" | "number" | "url";
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
}

export function Input({type = "text", label, placeholder = "", register}: Props) {

    const id = useId();

    return (
        <div>
            {label && <label className={"font-bold"} htmlFor={id}>{label}:</label>}
            <input className={"w-[500px] block rounded font-bold text-3xl"} id={id} type={type} placeholder={placeholder} {...register} />
        </div>
    );
}
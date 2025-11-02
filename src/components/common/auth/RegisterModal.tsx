import {Modal} from "@/components";
import {useForm} from "react-hook-form";
import {Input} from "@/components/common/ui/form/Input";

interface Props {
    onClose: () => void;
}

interface FormData{
    username: string;
    password: string;
    email: string;
}

export function RegisterModal({onClose}: Props) {

    const {register, handleSubmit, formState : {errors}} = useForm<FormData>()

    const onSubmit = (data:FormData)=>{
        console.log(data)
    }


    return (
        <Modal closeModal={onClose} title={"register"}>
            <form className={"flex flex-col justify-center items-center"} onSubmit={handleSubmit(onSubmit)}>

                <Input register={register("username", {required: "enter your username"})} errors={errors} label={"username"} {...{placeholder:"enter you username"}}/>

                <Input register={register("email", {required:"enter your email please"})} errors={errors}  type={"email"} label={"email"}/>

                <Input errors={errors}  register={register("password", {required:"enter your password please", minLength: {value: 3, message: "min 3 characters"}})} type={"password"} label={"password"}/>

                <button className={"mt-2 p-4 rounded bg-green-500 text-white"}>submit</button>

            </form>
        </Modal>
    );
}
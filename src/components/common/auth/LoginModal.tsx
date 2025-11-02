import {Input, Modal} from "@/components";
import React from "react";
import {useModal} from "@/store/ModalContext";
import {useUser} from "@/store/AuthContext";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {loginApiCall} from "@/api/Auth";
import {toast} from "react-toastify";

interface FormData{
    identifier: string;
    password: string;
}

export function LoginModal({} ) {

    const {openModal, closeModal} = useModal();

    const {Login} = useUser();

    const {register, handleSubmit, formState : {errors}} = useForm<FormData>()

    const mutate = useMutation({mutationFn: loginApiCall})

    const onSubmit = (data:FormData)=>{
        mutate.mutate(data, {
            onSuccess: (response) => {
                console.log("response: ", response)
                Login(response.jwt, response.user);
                toast.success("You have Logged In successfully");
                closeModal();
            }
        })
    }

    return (
        <Modal closeModal={closeModal} title={"login"}>
            <form className={"flex flex-col justify-center items-center"} onSubmit={handleSubmit(onSubmit)}>

                <Input register={register("identifier", {required: "enter your username"})} errors={errors} label={"username"} {...{placeholder:"enter you username"}}/>

                <Input errors={errors}  register={register("password", {required:"enter your password please", minLength: {value: 3, message: "min 3 characters"}})} type={"password"} label={"password"}/>

                <button className={"mt-2 p-4 rounded bg-green-500 text-white"}>submit</button>

            </form>
            <span onClick={()=>openModal("register")} className={"hover:cursor-pointer hover:bg-green-500 hover:text-white border-2 bg-white rounded p-3"}> go to register </span>
        </Modal>
    );
}
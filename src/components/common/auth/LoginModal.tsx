import {Modal} from "@/components";
import React from "react";
import {useModal} from "@/store/ModalContext";


export function LoginModal({} ) {

    const {openModal, closeModal} = useModal();

    return (
        <Modal closeModal={closeModal} title={"login"}>
            <form>

            </form>
            <span onClick={()=>openModal("register")}> go to register </span>
        </Modal>
    );
}
import {Modal} from "@/components";
import React from "react";

interface Props {
    onClose: () => void;
}

export function LoginModal({onClose}: Props) {
    return (
        <Modal closeModal={onClose} title={"login"}>
            <form>

            </form>
        </Modal>
    );
}
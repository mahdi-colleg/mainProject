import {Modal} from "@/components";

interface Props {
    onClose: () => void;
}

export function RegisterModal({onClose}: Props) {
    return (
        <Modal closeModal={onClose} title={"register"}>
            <form>

            </form>
        </Modal>
    );
}
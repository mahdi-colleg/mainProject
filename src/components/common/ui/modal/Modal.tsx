import React from "react";
import {Portal} from "@/components";

interface Props{
    title?: string;
    children: React.ReactNode;
    closeModal: () => void;
}

export function Modal({ title, children, closeModal }: Props) {
    return (
        <Portal onClose={closeModal}>
            <div className="absolute bg-zinc-200 z-10 translate-y-2/4 -translate-x-2/4 left-[50%] top-[50%] min-w-[50vw] max-w-[100vw] min-h-[50vh] max-h-[100vh] overflow-auto">
                <div className="flex justify-between rounded bg-white p-8 text-[22px]">
                    <div onClick={closeModal} className="cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="30px"
                            height="30px"
                        >
                            <path d="M7 4 C6.7442187 4.0974687 6.4879688 4.0974687 6.2929688 4.2929688 L4.2929688 6.2929688 C3.9019688 6.6839688 3.9019688 7.3170312 4.2929688 7.7080312 L10.585938 14 L4.2929688 20.292969 C3.9019688 20.683969 3.9019688 21.317031 4.2929688 21.708031 L6.2929688 23.707031 C6.6839688 24.098031 7.3170312 24.098031 7.7080312 23.707031 L14 17.414062 L20.292969 23.707031 C20.683969 24.098031 21.317031 24.098031 21.708031 23.707031 L23.707031 21.708031 C24.098031 21.317031 24.098031 20.683969 23.707031 20.292969 L17.414062 14 L23.707031 7.7080312 C24.098031 7.3170312 24.098031 6.6839688 23.707031 6.2929688 L21.708031 4.2929688 C21.317031 3.9019688 20.683969 3.9019688 20.292969 4.2929688 L14 10.585938 L7.7080312 4.2929688 C7.5545312 4.1394688 7.2557813 3.9375313 7 4 z" />
                        </svg>
                    </div>
                    {title && <h2 className="font-semibold">{title}</h2>}
                </div>

                <div className="p-8 text-[18px]">
                    {children}
                </div>
            </div>
        </Portal>
    );
}
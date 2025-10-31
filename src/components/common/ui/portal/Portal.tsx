import {createPortal} from "react-dom";
import React, {useEffect} from "react";

interface Props {
    children: React.ReactNode;
    onClose: () => void;
}

export function Portal({children, onClose}: Props) {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, []);


    return createPortal(
        <div className={"fixed top-0 right-0 bottom-0 left-0 bg-[#efefef] bg-opacity-80 z-10 flex justify-center items-center"} onClick={onClose}>
            <div onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById("portal")!
    );
}
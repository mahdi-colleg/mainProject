import {useEffect} from "react";

interface Props{
    onClick: ()=>void;
    isOverflowHidden?: boolean;
}

export function useOverlay({onClick, isOverflowHidden = false}: Props) {
    useEffect(() => {
        const pageClickHandler = () => {
            onClick();
        }
        document.addEventListener("click", pageClickHandler);
        return () => {
            document.removeEventListener("click", pageClickHandler);
        }
    }, []);


    useEffect(()=>{
        if (isOverflowHidden){
            document.body.style.overflowY = "hidden";
        }else {
            document.body.style.overflowY = "auto";
        }
        return ()=>{
            document.body.style.overflowY = "auto";
        }
    }, [isOverflowHidden])
}
import {useState} from "react";

export default function useDebounce (func: Function, delay: number) {
    const [timer , setTimer] = useState<number>();

    return function(){
        clearTimeout(timer);
        let timerTimout = setTimeout(func, delay);
        setTimer(timerTimout)
    }

}
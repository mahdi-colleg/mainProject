import {Header} from "@/components";
import {Footer} from "@/components";
import React from "react";

interface Props{
    children: React.ReactNode;
}

export function Layout({children}:Props) {
    return (
        <>
            <Header/>
                <main>{children}</main>
            <Footer/>
        </>
    );
}

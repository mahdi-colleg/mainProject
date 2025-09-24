import {Header} from "@/components/layouts/header";
import {Footer} from "@/components/layouts/footer";
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

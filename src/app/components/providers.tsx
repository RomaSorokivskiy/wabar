"use client"
import {ThemeProvider} from "next-themes";
import Header from "@/app/components/header";
import {useEffect, useState} from "react";
const Providers = ({children } : {
    children: React.ReactNode
}) => {
    const [ mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, []);

    if(!mounted) {
        return (
            <>
                <Header/>
                {children}
            </>
        )
    }
    return(
        <ThemeProvider>
            <Header/>
            {children}
        </ThemeProvider>
    )
}
export default Providers

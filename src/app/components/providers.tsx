"use client"
import {ThemeProvider} from "next-themes";
import Header from "@/app/components/header";
const Providers = ({children } : {
    children: React.ReactNode
}) => {
    return(
        <ThemeProvider>
            <Header/>
            {children}
        </ThemeProvider>
    )
}
export default Providers

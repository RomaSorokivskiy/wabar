"use client"
import {useSearchParams} from "next/navigation";
const AuthPage = () => {
    const pathname = useSearchParams();
    if(pathname.get("type") === "register") {
        return (
            <div>
                register
            </div>
        )
    }else if(pathname.get("type") === "login") {
        return (
            <div>
                login
            </div>
        )
    }
}
export default AuthPage;
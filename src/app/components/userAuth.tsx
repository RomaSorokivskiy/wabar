import {useState} from "react";
import Link from "next/link";
const UserAuth = () => {
    const [user, setUser] = useState(false)
    if (!user) {
        return (
            <div>
                <Link href={{pathname:"auth", query:{ type:"login" }}}>LogIn</Link>
                /
                <Link href={{pathname:"auth", query:{ type: "register" }}}>Register</Link>
            </div>
        )
    }
}
export default UserAuth;
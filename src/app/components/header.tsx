import Link from 'next/link'
import Logo from "../img/logo.svg"

import ThemeSwitcher from "@/app/components/themeSwitcher";
import UserAuth from "@/app/components/userAuth";

import "../stylesheets/header.scss"
const Header = () => {
    return (
        <header>
            <div className="container">
                <Link href={"/"}>
                    <Logo/>
                </Link>
                <UserAuth/>
                <ThemeSwitcher/>
            </div>
        </header>
    )
}
export default Header;

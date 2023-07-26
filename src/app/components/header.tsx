import Link from 'next/link'
import Image from "next/image";
import Logo from "../img/logo.svg"
const Header = () => {
    return (
        <header>
            <Link href={"/"}>
                <Image src={Logo} alt={"Logo"}/>
            </Link>
        </header>
    )
}
export default Header;

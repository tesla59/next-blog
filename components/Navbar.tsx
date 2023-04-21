import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const user = null;
    const username = null;

    return (
        <nav className="navbar">
            <ul className="navlist">
                <li className="navItem">
                    <Link href="/">
                        <button id="logo">
                            <Image
                                src="/vercel.svg"
                                alt="Logo"
                                width={64}
                                height={48}
                                id="logo"
                            />
                        </button>
                    </Link>
                </li>
                {/* username exist */}
                {username && (
                    <>
                        <li>
                            My Pages
                        </li>
                        <li>
                            Profile
                        </li>
                    </>
                )}
                {/* it doesnt */}
                {!username && (
                    <li>
                        <Link href="/login">
                            <button className="loginButton">
                                Login
                            </button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
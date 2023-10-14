import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'
export default function Navbar() {
  return (
    <section className="bg-lblack">
        <div className="container relative" id="area">
            <nav className="flex justify-between items-center px-5 py-5 lg:px-0">
                <div>
                    <Link href="/">
                        <Image src={Logo}
                                alt='navbar-logo'
                                quality={100}
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-20">
                    <div>
                        <ul className="hidden md:flex gap-5">
                            <li><Link className="active link group" href="/">Home</Link></li>
                            <li><Link className="link group" href="">Cards</Link></li>
                            <li><Link className="link group" href="#">Features</Link></li>
                            <li><Link className="link group" href="#">FAQs</Link></li>
                            <li><Link className="link group" href="">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="hidden md:flex">
                        <Link className="btn-primary" href="/src/pages/login.html">Login</Link>
                    </div>      
                    <div className="md:hidden">
                        <button className="text-white text-2xl" id="phone_menu_btn">
                            <span className="iconify" data-icon="line-md:close-to-menu-alt-transition"></span>
                        </button>
                        <ul className="w-full p-5 absolute top-full right-full bg-dblack z-10 transition-all duration-500 ease-in-out" id="toggle_menu">
                            <li><Link className="link" href="/">Home</Link></li>
                            <li><Link className="link" href="">Cards</Link></li>
                            <li><Link className="link" href="#">Features</Link></li>
                            <li><Link className="link" href="#">FAQs</Link></li>
                            <li><Link className="link" href="">Contact Us</Link></li>
                            <li><Link className="btn-primary block text-center" href="/src/pages/login.html">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>
  )
}

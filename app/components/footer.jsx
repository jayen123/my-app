import Link from "next/link"
import Image from "next/image"
import Logo from "./logo.png"
export default function Footer() {
  return (
    <section className="bg-lblack px-[10px] md:px-0 py-[50px]">
        <div className="container">
            <div className="row">
                <div className="grid lg:grid-cols-4 gap-5">
                    <div className="flex flex-col gap-5">
                        <div>
                            <Link href="/">
                                <Image 
                                src={Logo}
                                alt="footer-logo"
                                quality={100}
                                 />
                            </Link>
                        </div>
                        <div>
                        </div>
                        <div className="flex gap-2">
                            <Link className="footer-icon" href="https://www.facebook.com/shadapixel"><span className="iconify" data-icon="gg:facebook"></span></Link>
                            <Link className="footer-icon" href=""><span className="iconify" data-icon="mdi:twitter"></span></Link>
                            <Link className="footer-icon" href="#"><span className="iconify" data-icon="mdi:instagram"></span></Link>
                            <Link className="footer-icon" href="#"><span className="iconify" data-icon="entypo-social:linkedin"></span></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h5 className="font-mont font-bold text-white text-xl">QUICK LINKS</h5>
                        <div>
                            <ul className="flex flex-col gap-[10px]">
                                <li><Link href="/about" className="footer-link group"> <span className="iconify footer-arrow"  data-icon="bxs:right-arrow"></span> About Us</Link></li>
                                <li><Link className="footer-link group" href="#"> <span className="iconify footer-arrow"  data-icon="bxs:right-arrow"></span> Privacy Policy</Link></li>
                                <li><Link className="footer-link group" href="/src/pages/terms&conditions.html"> <span className="iconify footer-arrow"  data-icon="bxs:right-arrow"></span> Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex flex-col gap-[10px]">
                            <li><Link className="footer-link group" href="/src/pages/products.html"> <span className="iconify footer-arrow"  data-icon="bxs:right-arrow"></span> Products</Link></li>
                            <li><Link className="footer-link group" href="#"> <span className="iconify footer-arrow"  data-icon="bxs:right-arrow"></span> Features</Link></li>
                            <li><Link className="footer-link group" href="/src/pages/contact.html"> <span className="iconify footer-arrow"  data-icon="bxs:right-arrow"></span> Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

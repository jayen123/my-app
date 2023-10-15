'use client'
import { SlSocialFacebook } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { TiArrowRightThick } from 'react-icons/ti';
import Link from "next/link"
import Image from "next/image"
import Logo from "./logo.png"
export default function Footer() {
    const apple = () => {
        alert('Hello');
    }
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
                            <Link className="footer-icon" href="https://www.facebook.com/shadapixel"> <SlSocialFacebook /> </Link>
                            <Link className="footer-icon" href=""><SlSocialTwitter /></Link>
                            <Link className="footer-icon" href="#"><SlSocialInstagram /></Link>
                            <Link className="footer-icon" href="#"><SlSocialLinkedin /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h5 className="font-mont font-bold text-white text-xl">QUICK LINKS</h5>
                        <div>
                            <ul className="flex flex-col gap-[10px]">
                                <li><Link href="/about" className="footer-link group"><TiArrowRightThick className='footer-arrow' /> About Us</Link></li>
                                <li><Link className="footer-link group" href="#"><TiArrowRightThick className='footer-arrow' /> Privacy Policy</Link></li>
                                <li><Link className="footer-link group" href="/src/pages/terms&conditions.html"><TiArrowRightThick className='footer-arrow' /> Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex flex-col gap-[10px]">
                            <li><Link className="footer-link group" href="/src/pages/products.html"><TiArrowRightThick className='footer-arrow' /> Products</Link></li>
                            <li><Link className="footer-link group" href="#"><TiArrowRightThick className='footer-arrow' /> Features</Link></li>
                            <li><Link className="footer-link group" href="/src/pages/contact.html"><TiArrowRightThick className='footer-arrow' /> Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                    <form class="flex flex-col gap-5" action="#">
                            <input class=" footer-input" type="search" name="search" id="search" placeholder="Write SomethinG" />
                            <input class="secondary-btn" type="submit" value="SEND MESSAGE" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

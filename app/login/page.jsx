import { BsEyeSlashFill } from 'react-icons/bs';

export default function Login() {
  return (
    <>
        <section className="bg-dblack py-[50px]">
        <div className="container">
            <div className="row">
                <div className="font-mont font-bold text-center uppercase pb-[50px]">
                    <p className="text-sm text-lred md:text-base">LOGIN</p>
                    <h2 className="text-base md:text-3xl text-white">HELLO! WELCOME</h2>
                </div>
                <div className="max-w-[770px] mx-auto px-[10px] md:px-0">
                    <form action="#">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="flex flex-col gap-1">
                                <label className="contact-label" for="email">Email Address</label>
                                <input className="contact-input" type="email" name="email" id="email" />
                            </div>
                            <div id="pass" className="flex flex-col gap-1 relative">
                                <label className="contact-label" for="password">Password</label>
                                <input className="contact-input" type="password" name="password" id="password" />
                                <div className="absolute right-2 top-[50%]  text-lgray text-2xl md:top-[55%]">
                                    <BsEyeSlashFill />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <input className="accent-lred" type="checkbox" name="remember" id="remember" />
                                    <label className="contact-label" for="remember">Remember Me</label>
                                </div>
                                <div>
                                    <a className="contact-label" href="#">Forget Password?</a>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <input className="btn-primary" type="submit" value="SEND MESSAGE" />
                            </div>
                            <div className="text-center">
                                <span className="contact-label">Don’t have an account?</span>
                                <a className="contact-label text-lred" href="/src/pages/signup.html">Sign Up.</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

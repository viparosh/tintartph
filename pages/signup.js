import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center h-full">
        <Header/>
        <div className="w-full py-12 flex justify-center items-center bg-[#f9f4fd]">
            <div className="bg-white mx-10 lg:mx-0 flex py-10 rounded-lg lg:w-1/3 w-full">
                <div className="gap-y-3 px-6 w-full flex flex-col items-center justify-center bg-white">
                    <div className="w-full grid gap-y-2 items-center grid-cols-3">
                        <p className="text-sm lg:block hidden font-semibold">FIRST NAME</p><input className="col-span-3 lg:col-span-2 rounded-md w-full border p-3" type="text" placeholder="Your first name"/>
                        <p className="text-sm lg:block hidden font-semibold">LAST NAME</p><input className="col-span-3 lg:col-span-2 rounded-md w-full border p-3" type="text" placeholder="Your last name"/>
                        <p className="text-sm lg:block hidden font-semibold">EMAIL</p><input className="col-span-3 lg:col-span-2 rounded-md w-full border p-3" type="text" placeholder="Your e-mail"/>
                        <p className="text-sm lg:block hidden font-semibold">PHONE NUMBER</p><input className="col-span-3 lg:col-span-2 rounded-md w-full border p-3" type="text" placeholder="(+63) | Your phone number"/>
                        <p className="text-sm lg:block hidden font-semibold">PASSWORD</p><input className="col-span-3 lg:col-span-2 rounded-md w-full border p-3" type="password" placeholder="Your password"/>
                    </div>
                    <div className="flex items-center gap-x-2">
                    <input type="checkbox" className="checked:bg-black"/>
                        <p className="text-xs font-semibold">By clicking sign up, I accept the 
                            <span className="text-violet-500 underline underline-offset-4"> terms and conditions</span>
                        </p>

                    </div>
                   
                    <button className="bg-violet-500 text-white font-semibold rounded-md w-4/5 py-2 mt-6 lg:mt-8">SIGN UP</button>
                    <div className="font-semibold flex text-sm gap-x-2">
                        <p>Already have an account ?</p>
                        <Link href={"/login"}>
                            <button className="underline underline-offset-4 text-violet-500">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SignUp
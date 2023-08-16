import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'

const AdminLogin = () => {
  return (
    <div className="w-full flex flex-col items-center h-full">
        <Header/>
        <div className="w-full py-12 md:px-6 flex justify-center items-center bg-[#f9f4fd]">
            <div className="bg-white flex py-10 rounded-lg lg:w-1/3 w-full">
                <div className="gap-y-3 px-6 w-full flex flex-col items-center justify-center bg-white">
                    <p className="text-3xl mb-6 font-bold">Login</p>
                    <input className="rounded-md w-full border p-3" type="text" placeholder="USERNAME"/>
                    <input className="rounded-md w-full border p-3" type="password" placeholder="PASSWORD"/>
                    <p className="mb-6 font-semibold self-start text-sm">Forgot Password ?</p>
                    <button className="bg-violet-500 text-white font-semibold w-full rounded-md py-3">LOG IN</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AdminLogin
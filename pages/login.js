import Link from 'next/link'
import { Layout } from '../components'

const Login = () => {
  return (
    <Layout>
        <div className="w-full py-12 flex justify-center items-center bg-[#f9f4fd]">
            <div className="bg-white flex py-10 rounded-lg lg:w-1/3 w-full">
                <div className="gap-y-3 px-6 w-full flex flex-col items-center justify-center bg-white">
                    <p className="text-3xl mb-6 font-bold">Login</p>
                    <input className="rounded-md w-full border p-3" type="text" placeholder="EMAIL"/>
                    <input className="rounded-md w-full border p-3" type="password" placeholder="PASSWORD"/>
                    <p className="mb-6 font-semibold self-start text-sm">Forgot Password ?</p>
                    <button className="bg-violet-500 text-white font-semibold w-full rounded-md py-3">LOG IN</button>
                    <div className="font-semibold flex text-sm gap-x-2">
                        <p>Don't have an account ?</p>
                        <Link href={"/signup"}>
                            <button className="underline underline-offset-4 text-violet-500">Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Login
import Head from 'next/head'
const Home = () => {

  return (
    <>
        <Head>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
            />
        </Head>

        <div className="w-full flex flex-col items-center h-full">
            {/*----------- HEADER ------------*/}
            <div className="justify-between items-center w-full p-10 flex bg-[#8d78c1] h-10">
                <p className="text-white">TintArt</p>
                <ol className="lg:flex gap-x-10 lg:flex-row hidden text-lg flex-row text-white cursor-pointer">
                    <li className="hover:text-indigo-800">Home</li>
                    <li className="hover:text-indigo-800">Partnerships</li>
                    <li className="hover:text-indigo-800">Gallery</li>
                    <li className="hover:text-indigo-800">Shop & Customization</li>
                    <li className="hover:text-indigo-800">About Us</li>
                    <li className="hover:text-indigo-800">FAQ</li>
                </ol>
            </div>

            {/*ABOUT CARD*/}
            <div className="w-3/4 flex flex-col">
                <div className="w-full flex">
                    <img className="w-1/3 object-cover" src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/274303002_2050930431737526_3298380760775580302_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeH0EQmxYXz95pvn_XuHMNMVxGv6QF7YJjrEa_pAXtgmOgIQ_-6jWpR6z3GWCbB41Y0ejh1cegQPydUR0evhQNS9&_nc_ohc=jdhmQIBnLEUAX8YL0EC&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_e2o=c&oh=00_AfBQSJAZPGEhTsK8q7_Uty5VjFKrIu5oPIHzBQRcMNLZHA&oe=64DEB576"/>
                    <img className="w-1/3 object-cover" src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/275659456_122597297013512_6613694434873308407_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFWpBtX_ybmrPim1m258p9DY1_O4aG6k-5jX87hobqT7kP6EFKriEksfLnSiqORAsjHg555EQPbOoOmPOhemaE5&_nc_ohc=wGhPTlb0ugYAX-qTsHw&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_e2o=c&oh=00_AfAHYzHAuk_BIZknEL2W5dROlJJDzyI6hPSN-NhlBiqgWg&oe=64DF375D"/>
                    <img className="w-1/3 object-cover" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/334930273_1054858782583316_7400151953830773441_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeHyUW4HV6EhKXR7zp3rluAooTrsgMlQSI-hOuyAyVBIjxm7HR2ptgyFb5XkOjE-0w7aUoZRNb8OUX8UC-PL1WMK&_nc_ohc=lt8jkUnRlB4AX8Ap5F9&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_e2o=c&oh=00_AfBj_ySlU2mP4uXRxNZbmxYiWfS1ekpM1p42pBoy1Q5FEA&oe=64DDF725"/>
                </div>
                <div className="w-full flex h-[25rem]">
                    <div className="w-1/3 flex items-center font-bold text-4xl justify-end bg-purple-200">
                        <p className="-rotate-90">
                            About TintArt
                        </p>
                    </div>
                    <div className="w-2/3 p-12 flex flex-col gap-y-6 bg-white-100">
                        <p>TintArt is a vibrant and innovative online platform that caters to individuals seeking unique and 
                        personalized t-shirt designs created by talented artists from around the world. 
                        It's not just a place to buy ordinary t-shirts; it's a 
                        haven for those who appreciate art and want to express their 
                        individuality through clothing.</p>
                        <p>TintArt offers a wide range of t-shirt styles, colors, and sizes. 
                        What sets it apart is the option to customize each design.
                        Whether you're looking for a minimalist masterpiece, a bold and colorful statement, 
                        or something in between, TintArt has it covered.</p>
                    </div>
                    <div className="w-1/6 bg-purple-800"></div>
                </div>
                <div className="w-full flex">
                    <div className="w-2/6 flex items-center justify-center">
                        <p className="font-semibold border-black border-2 p-6">TintArt</p>
                    </div>
                    <div className="font-semibold p-12 w-4/6 flex items-center justify-center bg-orange-200">
                        <p className="text-center">TintArt goes beyond being a marketplace; it's a community where art enthusiasts, designers, and customers come together.</p>
                    </div>
                </div>
            </div>

            {/*FOOTER*/}
            <div className="lg:px-24 px-12 py-12 text-white w-full bg-violet-900 flex flex-col">
            <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-between gap-y-8 lg:gap-x-8 py-10">
                <div className="flex items-center gap-y-8 flex-col lg:w-1/5 w-full">
                <img className="w-36 h-36 rounded-full" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/334956553_732271818309007_8840633854957844183_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeGTPmFqu7GDvBDbsLWpYgBzomxtSAxXg3GibG1IDFeDcXDoMCRLjg-qmX2u0mjbF03HJm46GFl8xi2cQf30pTyp&_nc_ohc=E8OM9fwVhE8AX90YuyO&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_e2o=c&oh=00_AfACRkxReh5AArM3qsUES3YiJfF46w1_yewz1_isWbtDLw&oe=64DE077C"/>
                <p className="text-center font-bold">Create your t-shirt ideas with TintArt's design templates or from scratch.</p>
                </div>
                
                <div className="flex items-center lg:items-start gap-y-5 flex-col lg:w-1/5 w-full">
                <p className="font-bold text-xl">EDCEL CABRERA</p>
                <p className="text-sm">Terms & Conditions</p>
                </div>
                
                <div className="flex items-center lg:items-start  gap-y-5 flex-col lg:w-1/5 w-full">
                <p className="font-bold text-xl">RONILO HALLERA</p>
                <p className="text-sm">Terms & Conditions</p>
                </div>
            
                <div className="flex items-center lg:items-start  gap-y-5 flex-col lg:w-1/5 w-full">
                <p className="font-bold text-xl">TOFU INK</p>
                <p className="text-sm">Terms & Conditions</p>
                </div>

                <div className="flex items-center lg:items-start gap-y-5 flex-col lg:w-1/5 w-full">
                <p className="font-bold text-xl">TINTART</p>
                <div className="flex flex-col text-sm gap-y-2">
                    <p>Homepage</p>
                    <p>Partnerships</p>
                    <ul className="ml-10 list-disc">
                    <li>Edcel Cabrera</li>
                    <li>Ronilo Hallera</li>
                    <li>Tofu Ink</li>
                    </ul>
                    <p>Gallery</p>
                    <p>Shop & Customization</p>
                    <p>About Us</p>
                    <p>FAQ</p>
                </div>
                </div>

            </div>
            <hr className="bg-white"></hr>
            <p className="text-center lg:text-left text-xl my-8 font-bold">© 2023 TintArt. All Rights Reserved</p>

            </div>
        </div>
    </>
  )
}

export default Home

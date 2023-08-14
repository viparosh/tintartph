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

            {/*FIRST CARD*/}

            <div className="mt-8 px-12 justify-between bg-[#bdbdbd] flex py-10 rounded-lg w-3/4">
                <img className="self-center w-[8rem] h-[8rem] rounded-full border-4 border-white "src="https://m.media-amazon.com/images/S/amzn-author-media-prod/7gcd7hidimm50egoknalcsrng8.jpg"/>
                <div className="w-2/5 gap-y-6 flex flex-col">
                    <div className="flex gap-x-3 items-center">
                        <p className="text-2xl text-white font-bold">Edcel Cabrera</p>
                        <p className="rounded-lg bg-gray-500 font-semibold text-sm text-white py-2 px-6">Artist</p>
                    </div>
                    <p className="text-sm text-white">Edcel's art is celebrated globally, exhibited in top galleries, and featured in leading digital art magazines. He collaborates widely, adding his unique touch to music, film, and gaming projects.</p>
                    <button className="bg-white rounded-full text-sm text-violet-400 w-2/5 font-semibold py-2">COMMISSION ME</button>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col">
                        <p className="text-sm">EMAIL</p>
                        <p className="text-white text-sm">epistemologytest@gmail.com</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm">PHONE NUMBER</p>
                        <p className="text-white text-sm">09668993211</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm">LOCATION</p>
                        <p className="text-white text-sm">Western Wall, Jerusalem</p>
                    </div>
                </div>
                <div>
                    <p>socmed icons</p>
                </div>
            </div>
            
            {/* SECOND CARD */}
            <div className="flex-col my-8 px-12 justify-between bg-[#bdbdbd] flex py-10 rounded-lg w-3/4">
                <p className="text-3xl text-white font-bold">
                    TERMS & CONDITIONS
                </p>
                <div className="my-6 w-[6rem] h-[0.5rem] bg-[#8d78c1]"></div>
                <div className="flex gap-x-6 justify-between">
                    <div className="flex w-1/3 bg-gray-200 p-8 rounded-lg">
                        <div className="flex flex-col">
                          <p className="font-bold">DURATION</p>
                          <p className="text-2xl">1-2 Months</p>  
                        </div>
                    </div>
                    <div className="flex w-1/3 bg-gray-200 p-8 rounded-lg">
                        <div className="flex flex-col">
                          <p className="font-bold">PRICE RANGE</p>
                          <p className="text-2xl">5 USD - 8 USD</p>  
                        </div>
                    </div>
                    <div className="flex w-1/3 bg-gray-200 p-8 rounded-lg">
                        <div className="flex flex-col">
                          <p className="font-bold">MODE OF PAYMENT</p>
                          <p className="text-2xl">G-CASH , PAYPAL</p>  
                        </div>
                    </div>
                </div>
                <hr className="h-[0.2rem] my-8 bg-gray-200 border-0 dark:bg-gray-300"/>
                <div className="flex gap-x-12">
                    <div className="w-2/3 text-black flex flex-col">
                        <p className="text-2xl font-semibold">By Commissioning me, you're agreeing to the terms stated below</p>
                        <ol className="list-decimal ml-6 font-medium">
                            <li>Give clear instructions on how you want your piece to look like.</li>
                            <li>Provide some reference photos.</li>
                            <li>It takes 5-7 days to receive the finished piece.</li>
                            <li>The commission should be for PERSONAL USE only.</li>
                            <li>I can post the piece and use it for my portfolio.</li>
                        </ol>
                    </div>
                    <div className="flex w-1/3 gap-y-4 flex-col">
                        <div className="p-6 bg-gray-200 rounded-lg flex flex-col">
                            <p className="text-2xl font-bold">Do's</p>
                            <ol className="text-lg list-disc ml-6 gap-x-10">
                                <li>Fanart</li>
                                <li>Portrait</li>
                                <li>Your OC's</li>
                                <li>NSFW</li>
                            </ol>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-lg flex flex-col">
                            <p className="text-2xl font-bold">Dont's</p>
                            <ol className="text-lg list-disc ml-6 gap-x-10">
                                <li>Gore</li>
                                <li>Mecha</li>
                                <li>Furry</li>
                                <li>Super NSFW</li>
                                <li>Detailed Backgrounds</li>
                            </ol>
                        </div>
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

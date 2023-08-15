import Header from '../components/header'
import Footer from '../components/footer'

const Home = () => {
    return (
      <>  
        <div className="w-full flex flex-col items-center h-full">
            <Header/>

            {/*FIRST CARD*/}

            <div className="mt-8 px-12 justify-between bg-[#bdbdbd] flex py-10 rounded-lg w-3/4">
                <img className="self-center w-[8rem] h-[8rem] rounded-full border-4 border-white" alt="image unavailable" src="https://m.media-amazon.com/images/S/amzn-author-media-prod/7gcd7hidimm50egoknalcsrng8.jpg"/>
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

            <Footer/>
        </div>
      </>
    )
}

export default Home

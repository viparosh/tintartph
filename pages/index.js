import Link from 'next/link'
import { Layout } from '../components'

const Home = () => {
  return (
    <Layout>
      <div className="bg-white h-[60rem] lg:h-[27rem] lg:w-3/4 w-full flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full py-24 flex flex-col items-start gap-y-8 justify-center px-10">
          <p className="font-bold text-violet-900 text-2xl lg:w-3/4 w-full">
            Design your unique t-shirt, express your style and passions with our simple custom creator.
          </p>
          <p className="font-semibold text-lg text-[#8d78c1] ">
            Commissions | Personalization | Printing
          </p>
          <Link href={"/gallery"}>
            <button className="font-semibold bg-indigo-500 rounded-md px-6 py-3 text-white">BROWSE GALLERY</button>
          </Link>
        </div>
        <div className="lg:w-1/2 w-full ">  
          <img className="aspect-square object-cover h-full w-full" alt="image unavailable" src="https://firebasestorage.googleapis.com/v0/b/test-image-72fde.appspot.com/o/A1.jpg?alt=media&token=9fc8d6a5-8a01-40b9-8d8b-c8c3effbb3b4"/>
        </div>
      </div>
      
      {/*THE ARTISTS*/}
      
      <div className="lg:flex-row flex-col flex gap-x-8 px-10 py-24 bg-stone-200 lg:w-3/4 w-full">
        <div className="gap-y-5 flex flex-col items-start lg:w-1/3 w-full px-10">
          <div className="w-full flex justify-between items-end">
            <p className="font-semibold text-xl">Ronilo Hallera</p>
            <img className="h-24 rounded-full aspect-square object-cover" alt="image unavailable" src="https://media.istockphoto.com/id/1407565742/photo/studio-portrait-of-a-man.jpg?s=170667a&w=0&k=20&c=Bq4DbJmjHn4dIDovdTquhaAxxqfxe3OcxOGpX5scORY="/>
          </div>
          <p className="text-justify text-sm">
          Ronilo transforms ordinary tees into extraordinary statements, a canvas for your individuality and passions.
          </p>
          <button className="font-semibold text-sm underline underline-offset-8 text-[#8d78c1]">Visit Profile</button>
        </div>
        <div className="w-0.5 bg-violet-950"></div>
        <div className="gap-y-5 flex flex-col items-start lg:w-1/3 w-full px-10">
          <div className="w-full flex justify-between items-end">
            <p className="font-semibold text-xl">TOFU Ink</p>
            <img className="h-24 rounded-full aspect-square object-cover" alt="image unavailable" src="https://burst.shopifycdn.com/photos/man-takes-time-to-ponder.jpg?width=1200&format=webp&exif=1&iptc=1"/>
          </div>
          <p className="text-justify text-sm">
          Turning fabric into wearable art, passion, and a keen sense of style to craft t-shirts that are more than just clothing.
          </p>
          <button className="font-semibold text-sm underline underline-offset-8 text-[#8d78c1]">Visit Profile</button>
        </div>
        <div className="w-0.5 bg-violet-950"></div>
        <div className="gap-y-5 flex flex-col items-start lg:w-1/3 w-full px-10">
          <div className="w-full flex justify-between items-end">
            <p className="font-semibold text-xl">Edcel Cabrera</p>
            <img className="h-24 rounded-full aspect-square object-cover" alt="image unavailable" src="https://img.freepik.com/free-photo/portrait-handsome-happy-man_23-2148780084.jpg?w=2000"/>
          </div>
          <p className="text-sm text-justify ">
          A visionary t-shirt designer whose creativity knows no bounds. With a passion for crafting wearable art.
          </p>
          <button className="font-semibold text-sm underline underline-offset-8 text-[#8d78c1]">Visit Profile</button>
        </div>
      </div>
      <div className="p-14 lg:w-3/4 w-full relative bg-violet-400 mb-8">
        <div className="flex items-start justify-between">
          <p className="font-bold text-violet-100 text-3xl">Personalize your own<br/> merchandise !</p>
          <button className="bg-white text-violet-500 px-5 py-3 font-semibold rounded-sm">Try it now</button>
        </div>
        <img className="absolute -bottom-6 right-64 w-[20rem] h-[20rem]" alt="image unavailable" src="https://firebasestorage.googleapis.com/v0/b/test-image-72fde.appspot.com/o/png-transparent-blank-t-shirts-white-t-shirt-template-template-t-shirt-apparel-tee-clothing-cotton-removebg-preview%20(3).png?alt=media&token=f502270d-47c3-44d3-81df-8c17d5e28a08"/> 
        <p className="mt-5 text-white w-1/2">Elevate Style, Create a Distinctive 
          Identity with Custom Merchandise, Leave a Lasting Impression!</p>
      </div>
    
      {/* How It Works */}

      <div className="w-3/4 py-8 lg:px-8 px-0">
        <div className="flex lg:flex-row flex-col  items-center justify-center gap-x-16 lg:items-end lg:justify-center">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold mb-6">How It Works</p>
          <img className="h-[32rem]" alt="image unavailable" src="https://firebasestorage.googleapis.com/v0/b/test-image-72fde.appspot.com/o/C3.jpg?alt=media&token=64294eca-9c28-4dc2-a693-8633a8833ece"/>
        </div>
        <ul className="lg:w-2/5 w-full lg:mt-0 mt-12">
          <li className="font-semibold">1.) Choose an Artist:</li>
          <li className="text-sm my-6">Browse through our talented pool of artists and select the one whose style aligns with your vision.</li>
          <li><hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"/></li>
          <li className="font-semibold">2.) Fill Up Commission Form:</li>
          <li className="text-sm my-6">Provide details about your desired artwork, including size, theme, and any specific requirements, on our easy-to-use commission form.</li>
          <li><hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"/></li>
          <li className="font-semibold">3.) Receive Digital Artwork:</li>
          <li className="text-sm my-6">Once the artist completes the masterpiece, you'll receive a high-quality digital version, ready to be cherished and shared!</li>
        </ul>
        </div>
      </div>

      {/*PRODUCTS*/}
      <div className="lg:p-32 py-20 flex items-center flex-col w-full bg-violet-400">
        <p className="mb-64 text-5xl font-bold">PRODUCTS</p>
        <div className="mb-24 flex lg:flex-row flex-col w-full items-center lg:justify-center gap-y-48 lg:gap-x-12">
          <div className="drop-shadow-xl pb-4 px-4 flex flex-col relative rounded items-center justify-end w-[18rem] h-[15rem] bg-white">
            <img className="rounded-lg absolute bottom-32 w-[16rem] h-[16rem]" alt="image unavailable" src="https://www.ondmoveshop.com/cdn/shop/products/109705020_285993912627344_1474962265031343183_n.jpg?v=1595753127"/>
            <p className="text-xl font-bold">Pancit Canton</p>
            <p className="text-lg font-medium text-gray-400">Ronilo Hallera</p>
            <p className="text-sm self-end mt-3 text-right text-black font-semibold">PHP 175.00</p>
          </div>
          <div className="drop-shadow-xl pb-4 px-4 flex flex-col relative rounded items-center justify-end w-[18rem] h-[15rem] bg-white">
            <img className="rounded-lg absolute bottom-32 w-[16rem] h-[16rem]" alt="image unavailable" src="https://ph-live-01.slatic.net/p/3d515c9c2832d9bb85c94a62b65fb4ff.jpg"/>
            <p className="text-xl font-bold">Angel's Burger</p>
            <p className="text-lg font-medium text-gray-400">Edcel Cabrera</p>
            <p className="text-sm self-end mt-3 text-right text-black font-semibold">PHP 175.00</p>
          </div>
          <div className="drop-shadow-xl pb-4 px-4 flex flex-col relative rounded items-center justify-end w-[18rem] h-[15rem] bg-white">
            <img className="rounded-lg absolute bottom-32 w-[16rem] h-[16rem]" alt="image unavailable" src="https://mendotareporter.com/uploads/images/2022/11/76b8477a9b733eb82b4daa222e5b6fa3.jpg"/>
            <p className="text-xl font-bold">Corn T-Shirt</p>
            <p className="text-lg font-medium text-gray-400">TOFU Ink</p>
            <p className="text-sm self-end mt-3 text-right text-black font-semibold">PHP 175.00</p>
          </div>
        </div>
        <button className="px-8 text-purple-900 font-semibold py-4 bg-white rounded-lg">VIEW ALL PRODUCTS</button>
      </div>
    </Layout>
  )
}

export default Home;
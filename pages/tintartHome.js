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
        <div className="justify-between items-center w-full p-10 flex bg-[#8d78c1] h-10">
          <p className="text-white">TintArt</p>
          <ol className="lg:flex gap-x-10 lg:flex-row hidden">
              <li className="text-lg text-white hover:text-indigo-800 cursor-pointer">Home</li>
              <li className="text-lg text-white hover:text-indigo-800 cursor-pointer">Partnerships</li>
              <li className="text-lg text-white hover:text-indigo-800 cursor-pointer">Gallery</li>
              <li className="text-lg text-white hover:text-indigo-800 cursor-pointer">Shop & Customization</li>
              <li className="text-lg text-white hover:text-indigo-800 cursor-pointer">About Us</li>
              <li className="text-lg text-white hover:text-indigo-800 cursor-pointer">FAQ</li>
          </ol>
        </div>
        <div className="bg-white h-[60rem] lg:h-[27rem] lg:w-3/4 w-full flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full py-24 flex flex-col items-start gap-y-8 justify-center px-10">
            <p className="font-bold text-violet-900 text-2xl lg:w-3/4 w-full">
              Design your unique t-shirt, express your style and passions with our simple custom creator.
            </p>
            <p className="font-semibold text-lg text-[#8d78c1] ">
              Commissions | Personalization | Printing
            </p>
            <button className="font-semibold bg-indigo-500 rounded-md px-6 py-3 text-white">BROWSE GALLERY</button>
          </div>
          <div className="lg:w-1/2 w-full ">
            <img className="aspect-square object-cover h-full w-full" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/334929512_221307023740928_3883504189965056999_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeFe3xR1re7BmIrRuOJ7lIjgwW-8ua6YhgnBb7y5rpiGCXBo_ARFkdIsBi8fQ2_BZq7r2L2DYTfS_HmnXDQcl3N2&_nc_ohc=CzjS1Cdg19cAX8tPjep&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_e2o=c&oh=00_AfDblymIBs066s8D3kXOIbDbgDF_8gUy8lRu0rFPXMemCA&oe=64DE5901"/>
          </div>
        </div>
        
        {/*THE ARTISTS*/}
        
        <div className="lg:flex-row flex-col flex gap-x-8 px-10 py-24 bg-stone-200 lg:w-3/4 w-full">
          <div className="gap-y-5 flex flex-col items-start lg:w-1/3 w-full px-10">
            <div className="w-full flex justify-between items-end">
              <p className="font-semibold text-xl">Ronilo Hallera</p>
              <img className="h-24 rounded-full aspect-square object-cover" src="https://media.istockphoto.com/id/1407565742/photo/studio-portrait-of-a-man.jpg?s=170667a&w=0&k=20&c=Bq4DbJmjHn4dIDovdTquhaAxxqfxe3OcxOGpX5scORY="/>
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
              <img className="h-24 rounded-full aspect-square object-cover" src="https://burst.shopifycdn.com/photos/man-takes-time-to-ponder.jpg?width=1200&format=webp&exif=1&iptc=1"/>
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
              <img className="h-24 rounded-full aspect-square object-cover" src="https://img.freepik.com/free-photo/portrait-handsome-happy-man_23-2148780084.jpg?w=2000"/>
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
          <img className="absolute -bottom-6 right-64 w-[20rem] h-[20rem]" src="https://firebasestorage.googleapis.com/v0/b/test-image-72fde.appspot.com/o/png-transparent-blank-t-shirts-white-t-shirt-template-template-t-shirt-apparel-tee-clothing-cotton-removebg-preview%20(3).png?alt=media&token=f502270d-47c3-44d3-81df-8c17d5e28a08"/> 
          <p className="mt-5 text-white w-1/2">Elevate Style, Create a Distinctive 
            Identity with Custom Merchandise, Leave a Lasting Impression!</p>
        </div>
        
        {/* How It Works */}

        <div className="w-3/4 py-8 lg:px-8 px-0">
          <div className="flex lg:flex-row flex-col  items-center justify-center gap-x-16 lg:items-end lg:justify-center">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold mb-6">How It Works</p>
            <img className="h-[32rem]" src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/330356254_220002910526545_4178440985836823348_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeGWjneOR01PfjsJkXxO_COfwLH8bngd5efAsfxueB3l51YiNg4c_WshFeNQemc5sd3RCS0Wx1kHCF6SPXkg1Sv8&_nc_ohc=2HsSvLlu5GcAX9FhLqB&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_e2o=c&oh=00_AfD3kJ0cki8gtFuxQeVBtUJV-IF9xLz7In49eN6-MHgLHA&oe=64DE74D5"/>
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
              <img className="rounded-lg absolute bottom-32 w-[16rem] h-[16rem]" src="https://www.ondmoveshop.com/cdn/shop/products/109705020_285993912627344_1474962265031343183_n.jpg?v=1595753127"/>
              <p className="text-xl font-bold">Pancit Canton</p>
              <p className="text-lg font-medium text-gray-400">Ronilo Hallera</p>
              <p className="text-sm self-end mt-3 text-right text-black font-semibold">PHP 175.00</p>
            </div>
            <div className="drop-shadow-xl pb-4 px-4 flex flex-col relative rounded items-center justify-end w-[18rem] h-[15rem] bg-white">
              <img className="rounded-lg absolute bottom-32 w-[16rem] h-[16rem]" src="https://ph-live-01.slatic.net/p/3d515c9c2832d9bb85c94a62b65fb4ff.jpg"/>
              <p className="text-xl font-bold">Angel's Burger</p>
              <p className="text-lg font-medium text-gray-400">Edcel Cabrera</p>
              <p className="text-sm self-end mt-3 text-right text-black font-semibold">PHP 175.00</p>
            </div>
            <div className="drop-shadow-xl pb-4 px-4 flex flex-col relative rounded items-center justify-end w-[18rem] h-[15rem] bg-white">
              <img className="rounded-lg absolute bottom-32 w-[16rem] h-[16rem]" src="https://mendotareporter.com/uploads/images/2022/11/76b8477a9b733eb82b4daa222e5b6fa3.jpg"/>
              <p className="text-xl font-bold">Corn T-Shirt</p>
              <p className="text-lg font-medium text-gray-400">TOFU Ink</p>
              <p className="text-sm self-end mt-3 text-right text-black font-semibold">PHP 175.00</p>
            </div>
          </div>
          <button className="px-8 text-purple-900 font-semibold py-4 bg-white rounded-lg">VIEW ALL PRODUCTS</button>
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

export default Home;
const Footer = () => {
  return (
    <>
       <div className="lg:px-24 px-12 py-12 text-white w-full bg-violet-900 flex flex-col">
            <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-between gap-y-8 lg:gap-x-8 py-10">
                <div className="flex items-center gap-y-8 flex-col lg:w-1/5 w-full">
                    <img className="w-36 h-36 rounded-full" alt="image unavailable" src="https://firebasestorage.googleapis.com/v0/b/test-image-72fde.appspot.com/o/N4.jpg?alt=media&token=822164af-60bc-4581-aa07-f326bd686b06"/>
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
    </>
  )
}

export default Footer

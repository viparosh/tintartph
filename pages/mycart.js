import Header from '../components/header'
import Footer from '../components/footer'

const MyCart = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center h-full">
        <Header/>
        {/* Content */}
        <div className="bg-gray-100 px-6 lg:w-3/4 w-full lg:flex-row flex-col flex py-12 gap-x-6 ">
            <div className="lg:w-2/3 w-full flex flex-col gap-y-6">
                <div className="flex items-center">
                    <p className="text-3xl font-bold mr-4">Your Cart</p>
                    <div className="rounded-full flex items-center justify-center h-10 w-10 bg-violet-500 text-white font-semibold">
                        <p className="text-center">2</p>
                    </div>
                </div>
                <div className="border-gray-400 rounded-lg border border-2 flex p-4 flex-col">
                    <p className="font-bold">Delivery Address</p>
                    <div className="my-4 flex flex-col items-start lg:grid lg:items-center lg:gap-4 gap-1 lg:grid-cols-7">
                        <div className="text-sm font-semibold col-span-2 flex flex-col">
                            <p>Name</p>
                            <p>Contact Number</p>
                        </div>
                        <p className="text-sm col-span-4">8502 Preston Rd. Inglewood, Maine 98380</p>
                        <button className="text-xs col-span-1 justify-self-end underline underline-offset-2 text-violet-700">Change</button>
                    </div>
                </div>

                {/* Promo */}
                <div className="w-full items-start border-gray-400 rounded-lg border border-2 lg:flex-row flex-col flex p-4 gap-y-2 sm:justify-between">
                    <p>Do you have a promo code ?</p>
                    <div className="rounded-lg bg-white w-full lg:w-1/3 flex border border-gray-600 p-1">
                        <input className="w-full border-none" type="text"/>
                        <button className="bg-violet-500 text-xs rounded-lg font-semibold text-white px-4">APPLY</button>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 w-full lg:px-0 lg:mt-0 mt-6 flex-col gap-y-6 flex">
               <div className="flex-col p-4 gap-y-2 border-gray-400 rounded-lg border border-2 flex">
                <div className="flex justify-between">
                    <p className="font-semibold">Subtotal</p>
                    <p className="text-violet-500 font-bold">P2500</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold">Delivery Fee</p>
                    <p className="text-violet-500 font-bold">P50</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-x-0 flex-col">
                        <p className="font-semibold">Total</p>
                        <span className="text-sm"><i>(VAT Included)</i></span>
                    </div>
                    <p className="text-violet-500 font-bold">P2550</p>
                </div>
               </div>
               <button className="bg-violet-500 py-2 font-bold tracking-wide text-white rounded-lg">PROCEED TO CHECKOUT</button>
            </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default MyCart;
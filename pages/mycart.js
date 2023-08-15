import Header from '../components/header'
import Footer from '../components/footer'

const MyCart = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center h-full">
        <Header/>
        {/* CONTENT */}
        <div className="w-3/4 flex py-12 gap-x-6 flex-row">
            <div className="w-2/3 flex flex-col gap-y-6">
                <div className="flex items-center">
                    <p className="text-3xl font-bold mr-4">Your Cart</p>
                    <div className="rounded-full flex items-center justify-center h-10 w-10 bg-violet-500 text-white font-semibold">
                        <p className="text-center">2</p>
                    </div>
                </div>
                <div className="border-gray-400 rounded-lg border border-2 flex p-2 flex-col">
                    <p className="font-bold">Delivery Address</p>
                    <div>
                        <p>Name</p>
                        <p>Contact Number</p>
                        <p>8502 Preston Rd. Inglewood, Maine 98380</p>
                        <button>Change</button>
                    </div>
                </div>
            </div>
            <div className="w-1/3 flex-col gap-y-6 flex">
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
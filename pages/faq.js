import { Layout } from '../components'

const FAQ = () => {

  return (
    <Layout>
        <div className="w-3/4 flex justify-center">
            <div className="w-1/4 bg-gray-200 gap-y-6 flex flex-col p-12">
                <p className="font-bold text-3xl">FAQs</p>
                <div className="flex gap-y-2 flex-col">
                    <p className="font-bold text-xl">Merchant</p>
                    <ul className="font-semibold ml-8">
                        <li>Shipping Details</li>
                        <li>Product Quality</li>
                    </ul>
                </div>
                <div className="flex gap-y-2 flex-col">
                    <p className="font-bold text-xl">Artist</p>
                    <ul className="font-semibold ml-8">
                        <li>Artwork Details</li>
                        <li>Payment Quality</li>
                        <li>Contact the Artist</li>
                    </ul>
                </div>
            </div>
            <div className="w-3/4 gap-y-6 flex flex-col p-12">
                <p className="font-bold text-4xl ">Shipping Details</p>
                <p>How long will it take to be delivered ?</p>
                <p>Do you ship worldwide ?</p>
                <p>How much is the shipping fee ?</p>
            </div>    
        </div>
    </Layout>
  )
}

export default FAQ

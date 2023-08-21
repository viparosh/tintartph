import { Layout } from '../components'

const Home = () => {
  return (
    <Layout>
      {/*----------- FILTER ------------*/}
      <div className="w-3/4 my-12 flex-wrap gap-y-2 flex gap-x-4">
        <button className="rounded-full bg-violet-500 py-1 text-white px-8 font-semibold">ALL</button>
        <button className="rounded-full border-2 bg-white border-violet-500 py-1 text-violet-500 px-8 font-semibold">EDCEL'S WORKS</button>
        <button className="rounded-full border-2 bg-white border-violet-500 py-1 text-violet-500 px-8 font-semibold">RON'S WORKS</button>
        <button className="rounded-full border-2 bg-white border-violet-500 py-1 text-violet-500 px-8 font-semibold">TOFU INK'S PRODUCTS</button>
      </div>

      {/*----------- PICTURES ------------*/}
      <div className="w-3/4 flex mb-12 gap-y-8 flex-wrap">
        <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4"/>
          <div>
            <p className="text-xl font-bold">Art Name</p>
            <p>Edcel Cabrera</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
        <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"/>
          <div>
            <p className="text-xl font-bold">Art Name</p>
            <p>Ronilo Hallera</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
        <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"/>
          <div>
            <p className="text-xl font-bold">Art Name</p>
            <p>Edcel Cabrera</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
        <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"/>
          <div>
            <p className="text-xl font-bold">Art Name</p>
            <p>Edcel Cabrera</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
        <div className="lg:w-1/4 w-1/2 px-6 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g"/>
          <div>
            <p className="text-xl font-bold">Product Name</p>
            <p>TOFU Ink</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
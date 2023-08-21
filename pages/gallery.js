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
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/169123166_3776132939141340_2633769412684664505_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeF4DDQQHICNILFxsHZotwbbR3wImr32-jdHfAiavfb6N9-UAnPVBV0bBuPUVWeijOrR9PqkqF98H_ClgL390-ca&_nc_ohc=tetpOyLfpNQAX9fvQCs&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_e2o=c&oh=00_AfCg03lwVZndgDDkRiGIgzHNSPSi3XQ1p6KSRgOrehvPeg&oe=64DFF0B1"/>
          <div>
            <p className="text-xl font-bold">Art Name</p>
            <p>Edcel Cabrera</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
        <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/241759219_1933046276859276_4167311701798164226_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGwLbF8Aw6Bv-DKSE1YC_9M2ktb8l9AEknaS1vyX0ASScCoa8FbWV5wqzmBBdl0C0YUEmV6JSIDzkRyrYjzN0TE&_nc_ohc=yRSBs4mb44sAX-bZGP1&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_e2o=c&oh=00_AfCTjIs9sfi-8eDB-5DpGM4JY0RpHy9tTZ-yZQYwoA1x9Q&oe=64E06A57"/>
          <div>
            <p className="text-xl font-bold">Art Name</p>
            <p>Ronilo Hallera</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
        <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/334930273_1054858782583316_7400151953830773441_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeHyUW4HV6EhKXR7zp3rluAooTrsgMlQSI-hOuyAyVBIjxm7HR2ptgyFb5XkOjE-0w7aUoZRNb8OUX8UC-PL1WMK&_nc_ohc=lt8jkUnRlB4AX8Ap5F9&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_e2o=c&oh=00_AfAsb0kMHYGnqyUuvGQN3aGuBop1zvJs3k1h8t1yZAlVzQ&oe=64DFF165"/>
          <div>
            <p className="text-xl font-bold">Art Name</p>
            <p>Edcel Cabrera</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
        <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/330356254_220002910526545_4178440985836823348_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeGWjneOR01PfjsJkXxO_COfwLH8bngd5efAsfxueB3l51YiNg4c_WshFeNQemc5sd3RCS0Wx1kHCF6SPXkg1Sv8&_nc_ohc=2HsSvLlu5GcAX9FhLqB&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_e2o=c&oh=00_AfDTzZSUJEe-1fFCjuc2lwqJ_lUQB9MGnSErh2xhtbvX4Q&oe=64E06F15"/>
          <div>
            <p className="text-xl font-bold">Art Name</p>
            <p>Edcel Cabrera</p>
          </div>
          <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
        </div>
        <div className="lg:w-1/4 w-1/2 px-6 shrink-0 gap-y-4 flex justify-between items-center flex-col">
          <img className="w-full rounded-lg aspect-square object-cover" alt="image unavailable" src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/275659600_122597343680174_4902109117258810232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeHT-qCdBzuOdFel1QolpBhD8OxUibSZo8Pw7FSJtJmjwwDEGL7HsL8r5gR81e0Wzhf7FmostHTvVN_Dt5NAqDzr&_nc_ohc=iofDkJVOzMcAX-lPTYk&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_e2o=c&oh=00_AfCkKJngsqkUU-5-m0wUozm-35n01Jk52VAP8y3CsKW41Q&oe=64DFDAE5"/>
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
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
            <img className="w-full rounded-lg aspect-square object-cover" src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/169123166_3776132939141340_2633769412684664505_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeF4DDQQHICNILFxsHZotwbbR3wImr32-jdHfAiavfb6N9-UAnPVBV0bBuPUVWeijOrR9PqkqF98H_ClgL390-ca&_nc_ohc=tetpOyLfpNQAX9fvQCs&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_e2o=c&oh=00_AfCg03lwVZndgDDkRiGIgzHNSPSi3XQ1p6KSRgOrehvPeg&oe=64DFF0B1"/>
            <div>
              <p className="text-xl font-bold">Art Name</p>
              <p>Edcel Cabrera</p>
            </div>
            <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
          </div>
          <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
            <img className="w-full rounded-lg aspect-square object-cover" src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/241759219_1933046276859276_4167311701798164226_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGwLbF8Aw6Bv-DKSE1YC_9M2ktb8l9AEknaS1vyX0ASScCoa8FbWV5wqzmBBdl0C0YUEmV6JSIDzkRyrYjzN0TE&_nc_ohc=yRSBs4mb44sAX-bZGP1&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_e2o=c&oh=00_AfCTjIs9sfi-8eDB-5DpGM4JY0RpHy9tTZ-yZQYwoA1x9Q&oe=64E06A57"/>
            <div>
              <p className="text-xl font-bold">Art Name</p>
              <p>Ronilo Hallera</p>
            </div>
            <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
          </div>
          <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
            <img className="w-full rounded-lg aspect-square object-cover" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/334930273_1054858782583316_7400151953830773441_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeHyUW4HV6EhKXR7zp3rluAooTrsgMlQSI-hOuyAyVBIjxm7HR2ptgyFb5XkOjE-0w7aUoZRNb8OUX8UC-PL1WMK&_nc_ohc=lt8jkUnRlB4AX8Ap5F9&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_e2o=c&oh=00_AfAsb0kMHYGnqyUuvGQN3aGuBop1zvJs3k1h8t1yZAlVzQ&oe=64DFF165"/>
            <div>
              <p className="text-xl font-bold">Art Name</p>
              <p>Edcel Cabrera</p>
            </div>
            <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
          </div>
          <div className="px-6 lg:w-1/4 w-1/2 shrink-0 gap-y-4 flex justify-between items-center flex-col">
            <img className="w-full rounded-lg aspect-square object-cover" src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/330356254_220002910526545_4178440985836823348_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeGWjneOR01PfjsJkXxO_COfwLH8bngd5efAsfxueB3l51YiNg4c_WshFeNQemc5sd3RCS0Wx1kHCF6SPXkg1Sv8&_nc_ohc=2HsSvLlu5GcAX9FhLqB&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_e2o=c&oh=00_AfDTzZSUJEe-1fFCjuc2lwqJ_lUQB9MGnSErh2xhtbvX4Q&oe=64E06F15"/>
            <div>
              <p className="text-xl font-bold">Art Name</p>
              <p>Edcel Cabrera</p>
            </div>
            <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
          </div>
          <div className="lg:w-1/4 w-1/2 px-6 shrink-0 gap-y-4 flex justify-between items-center flex-col">
            <img className="w-full rounded-lg aspect-square object-cover" src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/275659600_122597343680174_4902109117258810232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeHT-qCdBzuOdFel1QolpBhD8OxUibSZo8Pw7FSJtJmjwwDEGL7HsL8r5gR81e0Wzhf7FmostHTvVN_Dt5NAqDzr&_nc_ohc=iofDkJVOzMcAX-lPTYk&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_e2o=c&oh=00_AfCkKJngsqkUU-5-m0wUozm-35n01Jk52VAP8y3CsKW41Q&oe=64DFDAE5"/>
            <div>
              <p className="text-xl font-bold">Product Name</p>
              <p>TOFU Ink</p>
            </div>
            <button className="text-sm underline underline-offset-8 text-violet-500 self-end font-bold">View Artist Profile</button>
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

export default Home;
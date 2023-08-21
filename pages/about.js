import { Layout } from '../components'

const About = () => {

  return (
    <Layout>
        <div className="w-3/4 flex flex-col">
            <div className="w-full flex">
                <img alt="n/a" className="w-1/3 object-cover" src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/274303002_2050930431737526_3298380760775580302_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeH0EQmxYXz95pvn_XuHMNMVxGv6QF7YJjrEa_pAXtgmOgIQ_-6jWpR6z3GWCbB41Y0ejh1cegQPydUR0evhQNS9&_nc_ohc=jdhmQIBnLEUAX8YL0EC&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_e2o=c&oh=00_AfBQSJAZPGEhTsK8q7_Uty5VjFKrIu5oPIHzBQRcMNLZHA&oe=64DEB576"/>
                <img alt="n/a" className="w-1/3 object-cover" src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/275659456_122597297013512_6613694434873308407_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFWpBtX_ybmrPim1m258p9DY1_O4aG6k-5jX87hobqT7kP6EFKriEksfLnSiqORAsjHg555EQPbOoOmPOhemaE5&_nc_ohc=wGhPTlb0ugYAX-qTsHw&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_e2o=c&oh=00_AfAHYzHAuk_BIZknEL2W5dROlJJDzyI6hPSN-NhlBiqgWg&oe=64DF375D"/>
                <img alt="n/a" className="w-1/3 object-cover" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/334930273_1054858782583316_7400151953830773441_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeHyUW4HV6EhKXR7zp3rluAooTrsgMlQSI-hOuyAyVBIjxm7HR2ptgyFb5XkOjE-0w7aUoZRNb8OUX8UC-PL1WMK&_nc_ohc=lt8jkUnRlB4AX8Ap5F9&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_e2o=c&oh=00_AfBj_ySlU2mP4uXRxNZbmxYiWfS1ekpM1p42pBoy1Q5FEA&oe=64DDF725"/>
            </div>
            <div className="w-full flex h-[25rem]">
                <div className="w-1/3 flex items-center font-bold text-4xl justify-end bg-purple-200">
                    <p className="-rotate-90">
                        About TintArt
                    </p>
                </div>
                <div className="w-2/3 p-12 flex flex-col gap-y-6 bg-white-100">
                    <p>{`TintArt is a vibrant and innovative online platform that caters to individuals seeking unique and 
                    personalized t-shirt designs created by talented artists from around the world. 
                    It's not just a place to buy ordinary t-shirts; it's a 
                    haven for those who appreciate art and want to express their 
                    individuality through clothing`}</p>
                    <p>{`TintArt offers a wide range of t-shirt styles, colors, and sizes. 
                    What sets it apart is the option to customize each design.
                    Whether you're looking for a minimalist masterpiece, a bold and colorful statement, 
                    or something in between, TintArt has it covered.`}</p>
                </div>
                <div className="w-1/6 bg-purple-800"></div>
            </div>
            <div className="w-full flex">
                <div className="w-2/6 flex items-center justify-center">
                    <p className="font-semibold border-black border-2 p-6">TintArt</p>
                </div>
                <div className="font-semibold p-12 w-4/6 flex items-center justify-center bg-orange-200">
                    <p className="text-center">
                        {`TintArt goes beyond being a marketplace; it's a community where art enthusiasts, designers, and customers come together.`}
                    </p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default About

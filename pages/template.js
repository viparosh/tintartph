import Header from '../components/header'
import Footer from '../components/footer'

const Template = () => {

  return (
    <>
     <div className="w-full flex flex-col h-full">
       <Header/>
        <div className="w-full bg-pink-100 flex justify-center">
            <div className="w-3/4 bg-inherit">
              
            </div>
        </div>
       <Footer/>            
     </div>
    </>
  )
}

export default Template

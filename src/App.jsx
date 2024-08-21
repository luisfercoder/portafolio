import About from "./components/About"
import Navbar from "./components/Navbar"
import Presentation from "./components/Presentation"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"
import Proyects from "./components/Proyects"
import Letters from "./components/Letter"


function App() {

  return (
    
  <main className="absolute top-0 z-[-2]  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] " >  
      <div>    
    <header>
      <Navbar />
    </header>
    <main>
      <Presentation />
      <About />
      <Technologies />
      
      <Letters/>
      <Proyects />
    </main>
    {/* <footer>
      <Footer />
    </footer> */}
    </div>
  </main>



    // <div className=" text-neutral-300 ">
    //   {/* <div className="flixed top-0 -z-10 h-full w-full"></div> */}
    //   <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    //   <div className="container mx-auto px-72">
    //   <Navbar />
    //   <Presentation />
    //   </div>
    //   <div className="container mx-auto text-center mt-24 ">
    //     <About />
    //   </div>
    // </div>
    // </div>

  )
}

export default App

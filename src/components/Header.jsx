import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Header() {

  return(
    <header className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div>
        <nav className="m-5 ">
          <div className="text-white  flex  justify-end p-5 text-3xl space-x-2">
            <a className="" href="https://www.linkedin.com/in/luisfercoder/"><FaLinkedin /></a>
            <a href="https://github.com/luisfercoder"><FaGithub /></a> 
          </div>
        </nav>
        <div className=" text-center mt-32">
          <h1 className="mb-8 text-6xl lg:text-8xl md:text-2xl sm:text-xl  font-extrabold tracking-tight text-white   lg:mt-10 animate-fade-right animate-duration-[3000ms]" >LUIS FERNANDO</h1>
          <h2 className=" text-4xl lg:text-5xl md:text-xl sm:text-lg font-extrabold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text mb-10 animate-fade-left  animate-duration-[3000ms]">SOFTWARE DEVELOPER</h2>
        </div>
      </div>
    </header>
  )
}

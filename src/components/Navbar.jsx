 import { FaLinkedin } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";

 export default function Navbar() {
 return(
 <nav className=" mb-20 flex  justify-end py-6 text-neutral-300 ">
   {/* <h1 className="text-white ">LuisFerCoder</h1> */}
     <div className="m-8 flex items-center justify-center gap-4 text-2xl " >
      <a href="https://www.linkedin.com/in/luisfercoder/"><FaLinkedin /></a>
      <a href="https://github.com/luisfercoder"><FaGithub /></a>   
     </div>
 </nav>
 )
}
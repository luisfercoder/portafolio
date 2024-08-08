import jsonIcon from '../assets/file-json-o.svg'
export default function Technologies (){
  return (
<section className="py-10 relative  sm:py-16 lg:py-24 lg:pt-36">
 

    <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center  ">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-thin text-neutral-300   sm:text-4xl sm:leading-tight">Technologies</h2>
        </div>
        <div className=" grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4  ">
            
            <div className=" h-12 md:h-16 lg:h-20  flex shadow-lg items-center     justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20  mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript"/>
            </div>

            <div className="h-12 md:h-16 lg:h-20   flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20  mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React"/>
            </div>

            <div className=" h-12 md:h-16 lg:h-20  flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML"/>
            </div>

            <div className=" h-12 md:h-16 lg:h-20   flex shadow-lg items-center justify-center ">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20  mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS"/>
            </div>
            <div className="h-12 md:h-16 lg:h-20   flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20  mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind"/>
            </div>

            <div className=" h-12 md:h-16 lg:h-20 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap"/>
            </div>

            <div className=" h-12 md:h-16 lg:h-20 flex shadow-lg items-center justify-center">
                <img className=" invert  object-contain w-full h-12 md:h-16 lg:h-20 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub"/>
            </div>

            <div className=" h-12 md:h-16 lg:h-20 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL"/>
            </div>

            <div className=" h-12 md:h-16 lg:h-20 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux"/>
            </div>

            <div className="h-12 md:h-16 lg:h-20 flex shadow-lg items-center justify-center">
                <img className=" invert object-contain w-full h-12 md:h-16 lg:h-20 mx-auto" src={jsonIcon} alt="JSON"/>
            </div>

            <div className=" h-12 md:h-16 lg:h-20 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg" alt="Axios"/>
            </div>

            <div className=" h-12 md:h-16 lg:h-20 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-12 md:h-16 lg:h-20 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux"/>
            </div>

            

            

            
           


          

        </div>
    </div>
</section>
  )
}
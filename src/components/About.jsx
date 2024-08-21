import photo1 from "../assets/About.jpg"
export default function About (){
  return (

    <div className="relative mt-20 w-3/4 mx-auto">
    <div
      className="absolute -inset-2 rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-600 via-purple-600 to-stone-600 opacity-50 blur-2xl"
    ></div>
    <div className="relative flex w-full h-64 items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300">
    <h2 className="font-principal title font-extrabold  text-4xl text-neutral-300 text-center not-italic  ">ABOUT ME </h2>
    <p className="m-10  font-normal text-xl">I'm Luis Fernando Cruz. I have begin like a    Software Developer since 2022 when I was studying college .My passion for    programming drives me to continuously learn and stay updated with the    latest trends and best practices.I am a dedicated , organized and    methodical individual. Always looking for new challenges and opportunities    to grow. But my skills go beyond just coding. I good in problem-solving,    debugging, ensuring that every project is efficient</p>
    </div>
  </div>


    // <div className="text-neutral-300 mt-60 mb-52 ">
    //   <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-3">
    //    <div className="h-24 rounded-lg  lg:col-span-2">
    //     <h2 className="font-principal title font-extrabold  text-4xl text-neutral-300 text-center not-italic  ">ABOUT ME </h2>
    //     <p className="m-10  font-normal text-xl">I'm Luis Fernando Cruz. I have begin like a    Software Developer since 2022 when I was studying college .My passion for    programming drives me to continuously learn and stay updated with the    latest trends and best practices.I am a dedicated , organized and    methodical individual. Always looking for new challenges and opportunities    to grow. But my skills go beyond just coding. I good in problem-solving,    debugging, ensuring that every project is efficient</p>
    //    </div>
    //    <div className="h-32 rounded-lg">
    //      <img className=" max-w-sm" src={photo1}></img>
    //    </div>
    //   </div>
    // </div>



         
   
    
  
    
  )
}
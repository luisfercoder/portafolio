import photo1 from "../assets/About.jpg"
export default function About (){
  return (
    <div className="text-neutral-300 mt-60 mb-52">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-3">
       <div className="h-24 rounded-lg  lg:col-span-2">
        <h2 className=" text-4xl text-neutral-300 text-center font-thin ">About Me</h2>
        <p className="m-10  font-normal text-xl">I'm Luis Fernando Cruz. I have begin like a    Software Developer since 2022 when I was studying college .My passion for    programming drives me to continuously learn and stay updated with the    latest trends and best practices.I am a dedicated , organized and    methodical individual. Always looking for new challenges and opportunities    to grow. But my skills go beyond just coding. I good in problem-solving,    debugging, ensuring that every project is efficient</p>
       </div>
       <div className="h-32 rounded-lg">
         <img className=" max-w-sm" src={photo1}></img>
       </div>
      </div>
    </div>



         
   
    
  
    
  )
}
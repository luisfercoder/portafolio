export default function Proyects(){

  return (
    <div className="w-80 p-10 ">
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 hover:shadow-white shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
         <div className="bg-neutral-950 rounded-[10px]  p-4 !pt-20 sm:p-6">
           <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

           <a href="#">
             <h3 className="mt-0.5 text-lg font-medium text-white">
               How to center an element using JavaScript and jQuery
             </h3>
           </a>

           {/* <div className="mt-4 flex flex-wrap gap-1">
             <span
               className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5        text-xs text-purple-600"
             >
               Snippet
             </span>
           </div> */}
         </div>
       </article>
    </div>


  )
}
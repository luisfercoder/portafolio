import {PROJECTS} from '../db.js'

export default function Letters(){
  return(
    <div className=" grid grid-cols-1 gap-4 mx-20 lg:grid-cols-4 lg:gap-8">
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>
    // <div>
    //   {PROJECTS.map((item)=>(
    //         <a href={item.url} className="grid bg-black w-1/4 m-10">
    //         {/* <img
    //           alt=""
    //           src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    //           className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    //         /> */}
          
    //         <div className="relative p-4 sm:p-6 lg:p-8">
    //           <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>
          
    //           <p className="text-xl font-bold text-white sm:text-2xl">{item.name}</p>
          
    //           <div className="mt-32 sm:mt-48 lg:mt-64">
    //             <div
    //               className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
    //             >
    //               <p className="text-sm text-white">
    //                 {item.description}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </a>
    //   ))}
    // </div>

  )
}
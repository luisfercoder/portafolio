import {PROJECTS} from '../db.js'

export default function Proyects(){
  return (
    <>
            <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-thin text-neutral-300   sm:text-4xl sm:leading-tight">PROJECTS</h2>
        </div>

    <div className="    grid mx-auto grid-cols-1 gap-8  mt-12 md:mt-20 md:grid-cols-3  p-10 ">
        {PROJECTS.map((item)=>(
                <div id={item.id} className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 hover:shadow-white shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="bg-neutral-950 rounded-[10px]  p-4 !pt-20 sm:p-6">
                  <time datetime="2022-10-10" className="block text-xl text-gray-500"> {item.name}</time>
       
                    <h3 className="mt-2 text-base font-medium text-white justify-center">{item.description}</h3>
                    <a
  class="mt-5 group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-slate-300 focus:outline-none focus:ring active:text-indigo-500"
  href={item.url}
>
  <span class="absolute -end-full transition-all group-hover:end-4">
    <svg
      class="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span class="text-sm font-medium transition-all group-hover:me-4"> Visit Site </span>
</a>
                  {/* <a
                     class="group inline-block rounded-full                    bg-gradient-to-r from-pink-500 via-red-500                    to-yellow-500 p-[2px] hover:text-white                    focus:outline-none focus:ring active:text-opacity-75"
                     href={item.url}
                    >
                     <span
                       class="block rounded-full bg-neutral-950 px-8 py-3 text-sm                    font-medium group-hover:bg-transparent"
                     >
                       Visit Site
                     </span>
                  </a> */}
                </div>
              </div>

        ))}

    </div>
    </>
  )
}
'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'



export default function Navbar() {
   
   const { data: session } = useSession()
   //const user = verifyJWT(session?.accessToken)
   const currentUser = session?.user
   console.log(currentUser,"current user")

   const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
   const exploreIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
   const userIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
   
   const Menus = [
      {icon:homeIcon, route:"/home"},
      {icon:exploreIcon, route:"/explore"},
      {icon:userIcon, route:`/user/${currentUser?.username}`}
   ]
   
   const pathName = usePathname();

   
   return (
      <div className="fixed bottom-0 mx-0 z-50 w-full h-16 bg-white border-t-2 border-gray-300 rounded-lg drop-shadow-2xl">
         <div className="grid h-full max-w-lg grid-cols-3 mx-auto">

            {Menus.map((menu, i) => (

               <Link key={ i } href={menu.route} className={`inline-flex flex-col items-center justify-center font-medium px-5 group ${pathName.includes(menu.route) && " bg-orange-400"}`}>
                  <button type="button">
                    <span className="group-hover:text-orange-500">{menu.icon}</span>
                  </button>
               </Link>
            
            ))}

         </div>
      </div>
   )
}
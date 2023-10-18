'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function WelcomeHeader() {
    const { data: session } = useSession()
    const currentUser = session?.user
    const username = currentUser?.username
    const firstName = currentUser?.firstName

    const imgPath = `https://res.cloudinary.com/dekv3xmjm/image/upload/caramel/ProfilePics/${username}.jpg`
    const notifPath = <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg>

    return (
       <div>
         <Image width= "30" height="30" src={imgPath}alt="dp"></Image>
         <h1>Welcome back <br/> {firstName}</h1>
         <Link href="/notifications">
          <button> {notifPath}</button> 
         </Link>
         
       </div> 
       
    );
}



import Link from "next/link"
import { HiPaperAirplane } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

export default function footer() {
  return (
    <div className='bg-light_yellow h-[30vh] w-full flex justify-between py-16 px-20'>

      <section className="h-full">
        <h1 className="font-bold text-3xl relative bottom-5">Subscribe</h1>
        <h4 className="text-text_gray relative bottom-3">We’ll never to spam you or share your email</h4>

        <div className="w-fit flex border-solid rounded-md border-2 border-text_gray mt-4">
          
          <div className="h-10 w-60">
            <input className="w-full h-full p-4 text-text_gray text-base rounded-l-md" type="text" placeholder="Enter your e-mail" />
          </div>
          <div className="w-10 h-10 bg-bg_btn grid place-content-center rounded-r-md">
            <HiPaperAirplane className="h-6 w-6 origin-center rotate-45 " />
          </div>

        </div>
      </section>

      <section className="flex flex-col items-center justify-center mr-4">
        <ul className="flex text-text_gray ">
          <li className="ml-16">
            <Link href='/'>Home</Link>
          </li>
          <li className="ml-16">
            <Link href='/blog'>Blogs</Link>
          </li>
          <li className="ml-16">
            <Link href='/about'>About</Link>
          </li>
          <li className="ml-16">
            <Link href='/contact-us'>Contact</Link>
          </li>
        </ul>

        <div className="flex gap-6 mt-12 ml-10">
            <FaTwitter  className="w-8 h-8 cursor-pointer"/>
            <FaFacebook  className="w-8 h-8 cursor-pointer"/>
            <FaGoogle  className="w-8 h-8 cursor-pointer"/>
        </div>
      </section>

    </div>
  )
}

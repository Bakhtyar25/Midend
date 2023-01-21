import Image from "next/image"
import Link from "next/link"
import { AiOutlineCaretDown } from "react-icons/ai";


export default function nav() {
  return (

    <div className='bg-light_blue w-full h-[13vh] flex justify-between items-center px-24'>


      <div>
        <div className="">
          <Image />
        </div>
        <h1 className="text-3xl">Healing</h1>
      </div>

      <div>
          <ul className="flex items-center gap-2">
            <li className="ml-14">
              <Link href='/'>Home</Link>
            </li>
            <li className="ml-14">
              <Link href='/blog'>Blogs</Link>
            </li>
            <li className="ml-14 flex items-center">
              <Link href='/about'>About</Link>
              <div className="relative left-2 cursor-pointer"><AiOutlineCaretDown/></div>
            </li>
            <li className="ml-14 ">
              <Link href='/contact-us'>Contact Us</Link>
            </li>
            <li className="bg-[#2DD3E3] w-24 h-8 flex justify-center items-center rounded ml-14">
              <Link className="" href='/login'>Log In</Link>
            </li>
          </ul>
      </div>

    </div>
  )
}

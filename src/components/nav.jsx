import Image from "next/image"
import Link from "next/link"

export default function nav() {
  return (
    <div className='bg-slate-500 w-full h-[11vh] flex justify-between items-center px-16'>

      <div className="bg-teal-400">
        <div className="">
          <Image />
        </div>
        <h1>Healing</h1>
      </div>

      <div className="bg-amber-300">
          <ul className="flex items-center gap-12">
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact-us'>Contact Us</Link>
            </li>
            <li>
              <Link href='/login'>Log In</Link>
            </li>
          </ul>
      </div>

    </div>
  )
}

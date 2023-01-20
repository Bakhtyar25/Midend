import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import img from "../../public/images/image1.png"

const inter = Inter({ subsets: ['latin'] })


export default function Page() {

  return (
    <div >
      <div className='back_image bg-no-repeat bg-cover h-[87vh] w-full flex flex-row-reverse justify-evenly items-center'>
        <div className=''>
          <Image src={img} alt="Picture of the author"
            width={500}
            height={500} />
        </div>
        <div className='h-fit text-center flex flex-col '>

          <p className='text-[35px]'>WE ARE HERE TO</p>
          <h1 className='text-[128px]'>HELP</h1>
          <Link href='#' className=' bg-dark_blue rounded-md p-3'>Book an appointment</Link>
        </div>
      </div>
    </div>

  )
}
import '../styles/globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { Poppins } from '@next/font/google'



const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />


      <body className={poppins.className}>

        <div className='h-screen w-full bg-slate-400'>
        <Nav/>
          <div className=''>{children}</div>
        <Footer/>

        </div>
        <Footer />
      </body>
    </html>
  );
}

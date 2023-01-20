import '../styles/globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>

        <div className='h-screen w-full bg-slate-400'>
        <Nav/>
          <div className=''>{children}</div>
        <Footer/>
        </div>

      </body>

    </html>
  )
}

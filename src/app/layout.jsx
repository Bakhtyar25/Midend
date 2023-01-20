import "../styles/globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <Nav />
        <div className="min-h-screen w-full img">
          <div className="">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

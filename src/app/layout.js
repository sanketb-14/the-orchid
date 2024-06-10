import Navigation from "@/components/Navigation";
import {ReservationProvider} from "@/components/ReservationContext"
import "./globals.css";
import {Josefin_Sans} from "next/font/google"

const josefin =Josefin_Sans({
  subsets:["latin"],
  display:"swap"
})

export const metadata = {
  title:{
    template:"%s / The Orchid",
    default:"Welcome / The Orchid"

  },
  description:"Luxury Hotel, the Orchid ,Located in the heart of the lonavala city, surrounded by the beautiful mountains and greenery of the city"

}
export default function RootLayout({children}){
  return(
    <html lang="en" data-theme="nord">
      <body className={`${josefin.className} min-h-screen flex flex-col relative `}>
        <Navigation/>
        <div className="flex-1 px-4 py-8 grid">
        <main className="max-w-7xl mx-auto w-full">
          <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
     
      </body>
    </html>
  )
}
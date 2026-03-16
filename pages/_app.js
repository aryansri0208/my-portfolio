import "../styles/globals.css";
import Navbar from "@/components/NavBar";
import { DM_Serif_Display, DM_Mono } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${dmSerifDisplay.variable} ${dmMono.variable} bg-[#0a0a0a]`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

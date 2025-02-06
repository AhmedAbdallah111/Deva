import Rubik from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Labul from "./_components/Labul";

const geistSans = Rubik({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 500 700 800 900",
});
const geistMono = Rubik({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 500 700 800 900",
});

export const metadata = {
  title: "Deva Education",
  description:
    "نقدم افضل طرق لمساعدة الطلاب علي التقدم للدراسة في تركيا وتأمين القبول المجاني لهم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Labul />
        {children}
        <Footer />
      </body>
    </html>
  );
}

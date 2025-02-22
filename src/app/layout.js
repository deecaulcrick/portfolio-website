import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Your Name | Portfolio",
  description: "A brief description of your portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-slate-950 dark:text-white text-black flex justify-center items-center">
        <div className="md:w-[60vw]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

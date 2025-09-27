import "./globals.css";
import Header from "./components/header";
import Home from "./page";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pilih sesuai kebutuhan
});

export const metadata = {
  title: "Undangan Online",
  description: "Katalog & pemesanan undangan digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} min-h-screen flex flex-col`}>
        <Header />
        <Home />
      </body>
    </html>
  );
}

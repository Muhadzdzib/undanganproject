// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Undangan Online",
  description: "Katalog & pemesanan undangan digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}

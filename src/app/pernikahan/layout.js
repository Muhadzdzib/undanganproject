// app/pernikahan/layout.js
export const metadata = {
  title: "Undangan Pernikahan",
  description: "Detail acara pernikahan",
};

export default function PernikahanLayout({ children }) {
  return <div className="min-h-screen bg-pink-50">{children}</div>;
}

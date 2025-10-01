import Header from "../components/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
}

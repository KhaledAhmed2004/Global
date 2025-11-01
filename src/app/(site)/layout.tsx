import Footer from "@/src/components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-232px)]">{children}</div>
      <Footer />
    </>
  );
}

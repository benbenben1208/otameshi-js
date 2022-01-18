import Nav from "./Nav";
import Footer from "./Footer";
import Seo from "./Seo";
const Layout: React.FC =  ({ children }) => {
  return (
    <>
      <div>
        <Seo />

        <Nav />
      </div>
      <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
        <main className="flex flex-1">{children}</main>
        <footer className="w-full h-6  text-gray-500 text-sm">
          <Footer />
        </footer>
      </div>
    </>
  );
}
export default Layout;

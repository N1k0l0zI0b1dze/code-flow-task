import Testimonials from "./Testimonials";
import Features2 from "./Features2";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar scrolled={false}/>
        <Hero />
        <Features2 />
        <Pricing />
        <Testimonials />
        <Footer />
    </div>
  );
};

export default HomePage;

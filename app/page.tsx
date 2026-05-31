import Hero from "@/components/Hero";
import { Navbar } from "@/components/ui/Navbar";
import Projects from "@/components/Projects";
import { FaHome, FaLaptopCode, FaTrophy, FaUser, FaBriefcase } from 'react-icons/fa';
import Grid from "@/components/Grid";
import Quote from "@/components/Quote";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import IslamicPattern from "@/components/ui/IslamicPattern";


export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden bg-islamic-cream">
      <Navbar navItems={[
        {name: 'Home', link: 'hero', icon: <FaHome size={30} color="#065f46" />},
        {name: 'About', link: 'about', icon: <FaUser size={30} color="#065f46" />},
        {name: 'Experience', link: 'experience', icon: <FaBriefcase size={30} color="#065f46" />},
        {name: 'Projects', link: 'projects', icon: <FaLaptopCode size={30} color="#065f46" />},
        {name: 'Awards', link: 'awards', icon: <FaTrophy size={30} color="#065f46" />},
      ]}/>
      <Hero/>
      <Grid />
      <Quote/>
      <div className="w-full bg-islamic-cream py-12 md:py-24 lg:py-32 px-4">
        <div className="relative w-full max-w-[1400px] mx-auto bg-emerald-950 py-12 md:py-24 lg:py-32 rounded-none md:rounded-3xl overflow-hidden border border-amber-300/25 shadow-xl">
          <IslamicPattern opacity={0.05} />
          <div className="relative z-10">
            <Projects />
          </div>
        </div>
      </div>
      <Experience />
      <Awards />
      <Testimonials/>
      <Footer/>
    </main>
  );
}

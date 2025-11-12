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


export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden bg-white" >
      <Navbar navItems={[
        {name: 'Home', link: 'hero', icon: <FaHome size={30} color="black" />},
        {name: 'About', link: 'about', icon: <FaUser size={30} color="black" />},
        {name: 'Experience', link: 'experience', icon: <FaBriefcase size={30} color="black" />},
        {name: 'Projects', link: 'projects', icon: <FaLaptopCode size={30} color="black" />},
        {name: 'Awards', link: 'awards', icon: <FaTrophy size={30} color="black" />},
      ]}/>
      <Hero/>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500/30 via-purple-500/30 to-transparent my-8"></div>
      <Grid />
      <Quote/>
      <div className="w-full bg-white py-12 md:py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto bg-black py-12 md:py-24 lg:py-32 rounded-none md:rounded-3xl">
          <Projects />
          <Experience />
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500/30 via-purple-500/30 to-transparent my-8"></div>
      <Awards />
      <Testimonials/>
      <Footer/>
    </main>
  );
}

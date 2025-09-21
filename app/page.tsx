import Hero from "@/components/Hero";
import { Navbar } from "@/components/ui/Navbar";
import Projects from "@/components/Projects";
import { WavyBackground } from "@/components/ui/WavyBG";
import { FaHome, FaLaptopCode, FaTrophy } from 'react-icons/fa';
import Grid from "@/components/Grid";
import Quote from "@/components/Quote";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden bg-white" >
      <Navbar navItems={[
        {name: 'Home', link: 'hero', icon: <FaHome size={30} color="gray" />},
        {name: 'Projects', link: 'projects', icon: <FaLaptopCode size={30} color="gray" />},
        {name: 'Awards', link: 'awards', icon: <FaTrophy size={30} color="gray" />},
      ]}/>
      <Hero/>
      <WavyBackground 
      className="max-w-4xl mx-auto"
      backgroundFill='white'
      waveOpacity={0.1}
      blur={2} waveWidth={90}
      speed="fast"
      />
      <Grid />
      <Quote/>
      <Projects />
      <WavyBackground 
      className="max-w-4xl mx-auto"
      backgroundFill='white'
      waveOpacity={0.1}
      blur={2} waveWidth={90}
      speed="fast"
      />
      <Awards />
      <Testimonials/>
    </main>
  );
}

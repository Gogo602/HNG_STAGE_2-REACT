import Footer from "../components/Footer";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section className=" text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </section>
  )
}

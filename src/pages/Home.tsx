import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section className="bg-[#131022] text-white px-6 py-3">
      <Navbar />
      <Hero />
    </section>
  )
}

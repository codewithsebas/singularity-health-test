import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import WorksSection from '../sections/WorksSection';

export default function Home() {
  return (
    <main className="bg-lightGray">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <Footer />
    </main>
  );
}

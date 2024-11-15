import "./styles/home.css";
import "./styles/utility.css";
import HighlightsSection from "./components/HighlightsSection";
import HeroSection from "./components/HeroSection";
import PlansSection from "./components/PlansSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/ContactSection";
import FindUsSection from "./components/FindUsSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
      <div>
          <Header />
          <HeroSection />
          <HighlightsSection />
          <PlansSection />
          <TestimonialsSection />
          <ContactForm />
          <FindUsSection />
          <Footer />
      </div>
  );
};

export default App;

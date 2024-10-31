import ContactForm from "./components/contact-form";
import FeaturedProperties from "./components/featured-properties";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

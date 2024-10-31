import ContactForm from "./components/contact-form";
import FeaturedProperties from "./components/featured-properties";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { PropertiesProvider } from "./providers/property-provider";

function App() {
  return (
    <PropertiesProvider>
      <div>
        <Navbar />
        <Hero />
        <FeaturedProperties />
        <ContactForm />
        <Footer />
      </div>
    </PropertiesProvider>
  );
}

export default App;

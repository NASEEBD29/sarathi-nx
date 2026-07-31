import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import WhatsAppButton from "./components/home/WhatsAppButton";
import CallButton from "./components/home/CallButton";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </>
  );
}

export default App;
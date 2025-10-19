import "./App.css";
import Header from "./components/layout/header/Header";
import Download from "./components/sections/download/Download";
import Footer from "./components/layout/footer/Footer";
import About from "./components/sections/about/About";
import Cta from "./components/sections/cta/Cta";
import Partners from "./components/sections/partners/Partners";
import Divider from "./components/common/Divider";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Download />
        <About />
        <Cta />
        <Divider />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

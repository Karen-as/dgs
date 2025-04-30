import "./App.css";
import Inicio from "./Components/Inicio";
import Aprende from "./Components/Aprende";
import HerramientasOnline from "./Components/HerramientasOnline.js";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Inicio />
      <Aprende />
      <HerramientasOnline/>
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;

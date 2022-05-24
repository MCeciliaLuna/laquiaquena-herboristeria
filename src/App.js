import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Footer from './components/Footer/Footer';
import IntroStevia from './components/IntroStevia/IntroStevia';
import Marcas from './components/Marcas/Marcas';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Carrousel />
      <IntroStevia />
      <Marcas />
      <Footer />
    </div>
  );
}

export default App;

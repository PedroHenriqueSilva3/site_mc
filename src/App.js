
import './App.css';
import Navbar from "./components/navbar";
import Banner from './components/banner';
import Cards from './components/cards';
import Vertical from './components/verticalCard';
import Baixarapp from './components/app';
import Info from './components/info';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Cards/>
      <Vertical/>
      <Baixarapp/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Bestdeals from './components/Bestdeals';
import Bestseller from './components/Bestseller';
import Carousal from './components/Carousal';
import Deals from './components/Deals';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Carousal/>
    <Bestseller/>
    <Deals/>
    <Bestdeals/>
    </>
  );
}
export default App;

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Heading from './components/Home/Heading/Heading';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className='sizing' >
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;

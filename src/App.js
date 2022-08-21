
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import Download from './components/Download/Download';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Subscribe from './components/Subscribe/Subscribe';



function App() {
  return (
    <main>
      <header className = 'header-bg'>
       <Navbar/>
       <Header/>
      </header>
      
      <Features/>
      <Download/>
      <Subscribe/>
      <Faq/>
      <Footer/>


      

    </main>
  );
}

export default App;

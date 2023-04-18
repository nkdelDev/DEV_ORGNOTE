
import Header from './header/index.js'
import Footer from './footer/index.js'
import HomePage from './pages/home/index';
import Sidebar from './sidebar/index';
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {

 



  return (

    <>
    <Header></Header>
    <Sidebar></Sidebar>
    <section id="page_app" className={'close'}> 
    <Routes>
        <Route path="*" element={<HomePage />} />
    </Routes>
    </section>
    <Footer></Footer>

    </>   
  );
}

export default App;

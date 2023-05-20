
import Header from './header/index.js'
import Footer from './footer/index.js'
import HomePage from './pages/home/index';
import Sidebar from './sidebar/index';
import { Routes,Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {

 



  return (

    <>
    <Header></Header>
    <Sidebar></Sidebar>
    <section id="page_app" className={'close'}> 
    <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
    
    </section>
    <Footer></Footer>

    <div id={'containerPopUp'}></div>

    </>   
  );
}

export default App;

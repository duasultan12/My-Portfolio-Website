import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Componenets/Navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import Hero from './Componenets/Hero/hero';
import About from './Componenets/About/About';
import Services from './Componenets/Services/Service';
import MyWork from './Componenets/MyWork/MyWork';
import Contact from './Componenets/Contact/Contact';
import Footer from './Componenets/Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
   <About/>
   <Services/>
   <MyWork />
   <Contact />
  <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

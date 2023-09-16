import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/dentist/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/contacto' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

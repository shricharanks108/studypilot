import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer"
import { Routes, BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/home' element={ <HomePage/> } />
        {/* <Route path='/*' element={ <NotFound/> } /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

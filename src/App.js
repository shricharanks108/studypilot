import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import PricingPage from "./pages/PricingPage/PricingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/home' element={ <HomePage/> } />
        <Route path='/pricing' element={ <PricingPage/> } />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/*' element={ <NotFoundPage/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

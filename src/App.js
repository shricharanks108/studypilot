import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PricingPage from "./pages/PricingPage/PricingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import ExamsPage from "./pages/ExamsPage/ExamsPage";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Routes, HashRouter, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage/UploadPage';
import CoursePage from './pages/CoursePage/CoursePage'

function App() {
  return (
    <HashRouter>
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
        <Route path='/upload' element={ <UploadPage/> } />
        <Route path='/coursePage' element={ <CoursePage/> }/>
        <Route path='/*' element={ <NotFoundPage/> } />
        <Route path='/about-us' element={ <AboutPage/> } />
        <Route path='/contact-us' element={ <ContactUsPage/> } />
        <Route path='/exams' element={ <ExamsPage/> } />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/sign-up' element={ <SignUpPage/> } />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import { Routes, BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        {/* <Route path='/*' element={ <NotFound/> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

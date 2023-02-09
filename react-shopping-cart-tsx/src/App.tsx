import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Navbar from './components/Navbar';
import './App.css'
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Navbar />
        <Container className='mb-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App

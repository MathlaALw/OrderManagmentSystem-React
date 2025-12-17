
import './App.css'
import Login from './components/Main/Login/Login'


import Register from './components/Main/Register/Register';
import Home from './components/Main/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/Main/NotFound/NotFound';


function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        {/* <Login /> */}

        {/* <Register /> */}
        {/* <Home /> */}

        <Footer />

      </div>
    </>
  )
}

export default App

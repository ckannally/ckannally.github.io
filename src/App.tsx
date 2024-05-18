import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './heading/header'
import About from './pages/about'
import Nallify from './pages/spotify'

function App() {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/nallify" element={<Nallify/>} />
        </Routes>
    </Router>
  )
}

export default App

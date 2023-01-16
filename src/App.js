import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Works from "./pages/Works"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App

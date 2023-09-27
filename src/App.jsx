import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home"
import About from "./pages/about"
import './App.css'
import Articles from "./pages/Articles"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="articles" element={<Articles/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

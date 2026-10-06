import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Cores from "./pages/Cores";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <NavBar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/cores" element={<Cores />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

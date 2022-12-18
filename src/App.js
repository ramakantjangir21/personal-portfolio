import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import ProjectDisplay from "./pages/ProjectDisplay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router basename="/personal-portfolio">
        <Navbar />
        <Routes>
          <Route path="/personal-portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

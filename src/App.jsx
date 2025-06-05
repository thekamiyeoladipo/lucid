import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewDream from "./pages/NewDream";
import DreamDetail from "./pages/DreamDetail";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewDream />} />
        <Route path="/dream/:id" element={<DreamDetail />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

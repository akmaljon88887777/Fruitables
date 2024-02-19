import { Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="text-lg">salom</div>
    </div>
  );
}

export default App;

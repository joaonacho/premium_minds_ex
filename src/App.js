import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { User } from "./components/User";
import { QuantumSolum } from "./components/QuantumSolum";
import { MarcusTremer } from "./components/MarcusTremer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/quantum" element={<QuantumSolum />} />
        <Route path="/marcus" element={<MarcusTremer />} />
      </Routes>
    </div>
  );
}

export default App;

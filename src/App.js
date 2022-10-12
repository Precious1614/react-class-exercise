import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      {/*<Navbar title="Home" />
      <Navbar title="About" />
      <Navbar title="Contact" />*/}
      <Routes>
        <Route path="/" element={<Home name="home hhhhh" />} />
        <Route path="/about" element={<About Ire="About" />} />
        <Route path="/contact" element={<Contact Bose="Tutorial" />} />
        <Route path="/:hi" element={<Contact Bose="Tutorial" />} />
      </Routes>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navigationbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/contactus";
import AboutUs from "./pages/aboutus";
import BasicFormHandling from "./pages/basicFormHandling";

// Importing Class State
import ClassState from "./pages/ClassState";

import FunctionalState from "./pages/FunctionalState";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>

        {/* Using it as a component */}
        <Route path="/classState" element={<ClassState></ClassState>}></Route>

        {/* Using it as a component */}
        <Route path="/functionalUseState" element={<FunctionalState></FunctionalState>}></Route>
        <Route path="/basicFormHandling" element={<BasicFormHandling></BasicFormHandling>}></Route>

      
      </Routes>
    </BrowserRouter>
      <h1 className="text-warning">Hello World</h1>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import DashBord from "./Components/DashBord/DashBord";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound404 from "./Components/NotFound/NotFound404";
import Reviwe from "./Components/Reviwe/Reviwe";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/reviwe" element={<Reviwe />}></Route>
        <Route path="/dashbord" element={<DashBord />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavLayout from "./nav-layout/NavLayout";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import NoPage from "./no-page/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
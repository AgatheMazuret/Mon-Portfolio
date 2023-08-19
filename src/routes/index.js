import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Default from "../Layouts/Default"
import Blank from "../Layouts/Blank";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route element={<Blank />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

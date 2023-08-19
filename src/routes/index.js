import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Description from "../components/Description/Description"
import Projects from "../components/Projects/Projects"
import Default from "../Layouts/Default"


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Description />} />
          <Route path="/" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

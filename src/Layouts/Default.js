import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer.js"

function Default() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Default;
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.js";

function Default() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Default;
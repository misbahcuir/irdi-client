import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;

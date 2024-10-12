import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/global.css";
import "../styles/layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
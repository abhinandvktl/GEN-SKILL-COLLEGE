import { Outlet } from "react-router-dom";
import { MainHeader } from "../components/MainHeader.jsx";
import { Footer } from "../components/Footer.jsx";

export function MainLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

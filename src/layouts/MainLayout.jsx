import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar.jsx";
import { MainHeader } from "../components/MainHeader.jsx";
import { Footer } from "../components/Footer.jsx";

export function MainLayout() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

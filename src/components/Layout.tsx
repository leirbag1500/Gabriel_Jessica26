import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";
import { RaffleBanner } from "./RaffleBanner";

export const Layout = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <Outlet />
        <Footer />
      </PageTransition>
      <RaffleBanner />
    </>
  );
};

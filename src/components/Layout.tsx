import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

export const Layout = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <Outlet />
        <Footer />
      </PageTransition>
    </>
  );
};

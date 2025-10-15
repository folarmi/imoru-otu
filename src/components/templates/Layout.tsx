import { Outlet } from "react-router-dom";
import { Footer, Header } from "../organisms";

const Layout = () => {
  return (
    <div className="bg-primary px-6">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };

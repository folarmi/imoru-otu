import { Layout } from "@/components/templates/Layout";
import { Aboutus, Home } from "@/pages";
import { Route, Routes } from "react-router-dom";

const RoutePage = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Route>
    </Routes>
  );
};

export { RoutePage };

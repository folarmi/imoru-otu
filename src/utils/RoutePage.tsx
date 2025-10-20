import { Layout } from "@/components/templates/Layout";
import { Aboutus, Home } from "@/pages";
import { NewsAndEvents } from "@/pages/NewsAndEvents";
import { Route, Routes } from "react-router-dom";

const RoutePage = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
      </Route>
    </Routes>
  );
};

export { RoutePage };

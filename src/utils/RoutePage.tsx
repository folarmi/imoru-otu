import { Layout } from "@/components/templates/Layout";
import { Aboutus, Gallery, GetInTouch, Home, NewsAndEvents } from "@/pages";
import { Route, Routes } from "react-router-dom";

const RoutePage = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export { RoutePage };

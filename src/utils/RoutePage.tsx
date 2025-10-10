import { Home } from "@/pages";
import { Route, Routes } from "react-router-dom";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { RoutePage };

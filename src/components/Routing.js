import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Calculation from "./Calculation";
import Login from "./Login";

const Routing = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

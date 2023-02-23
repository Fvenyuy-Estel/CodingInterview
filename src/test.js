import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./page1";
function Test() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Test;

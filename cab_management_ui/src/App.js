import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCab from "./components/AddCab";
import ListCab from "./components/ListCab";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<ListCab />}></Route>
          <Route path="/" element={<ListCab />}></Route>
          <Route path="/cabList" element={<ListCab />}></Route>
          <Route path="/addCab" element={<AddCab />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCab from "./components/AddCab";
import BookCab from "./components/BookCab";
import CabBookSuccess from "./components/CabBookSuccess";
import CabList from "./components/CabsList";
import Homepage from "./components/common/Homepage";
import ListCab from "./components/ListCab";
import Navbar from "./components/Navbar";
import UpdateCab from "./components/UpdateCab";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/cabList" element={<ListCab />}></Route>
          <Route path="/addCab" element={<AddCab />}></Route>
          <Route path="/editCab/:id" element={<UpdateCab />}></Route>
          <Route path="/bookCab" element={<BookCab />}></Route>
          <Route path="/pageBooked" element={<CabBookSuccess />}></Route>
          <Route path="/listCabs" element={<CabList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

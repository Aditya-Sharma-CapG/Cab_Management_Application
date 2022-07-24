import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCab from "./components/AddCab";
import Register from "./pages/registration";
import AdminLogin from "./components/AdminLogin";
import BookCab from "./components/BookCab";
import CabBookSuccess from "./components/CabBookSuccess";
import CabList from "./components/CabsList";
import Homepage from "./components/common/Homepage";
import ListCab from "./components/ListCab";
import Login from "./components/Login";
import UpdateCab from "./components/UpdateCab";
import UpdateCustomer from "./components/UpdateCustomer";
import CustomerList from "./components/CustomerList";
import SignupForm from "./components/SignupForm";
import AdminDashboard from "./components/AdminDashboard";
import EditUsers from "./components/EditUsers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/adminsignup" element={<SignupForm />}></Route>
          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
          <Route path="/editadmins" element={<EditUsers />}></Route>
          <Route path="/registration" element={<Register />} />
          <Route path="/Adminlogin" element={<AdminLogin />} />
          <Route path="/cabList" element={<ListCab />}></Route>
          <Route path="/addCab" element={<AddCab />}></Route>
          <Route path="/editCab/:id" element={<UpdateCab />}></Route>
          <Route path="/bookCab" element={<BookCab />}></Route>
          <Route path="/pageBooked" element={<CabBookSuccess />}></Route>
          <Route path="/listCabs" element={<CabList />}></Route>
          <Route path="/customerList" element={<CustomerList />}></Route>
          <Route path="/editCustomer/:id" element={<UpdateCustomer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

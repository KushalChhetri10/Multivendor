import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/user/Login";
import Register from "./pages/auth/user/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ActivationPage from "./pages/activation/ActivationPage";
import ShopLogin from "./pages/auth/shop/ShopLogin";
import ShopRegister from "./pages/auth/shop/ShopRegister";
import SellerActivationPage from "./pages/activation/SellerActivationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activation/:token" element={<ActivationPage />} />
        <Route path="/shoplogin" element={<ShopLogin />} />
        <Route path="/shopregister" element={<ShopRegister />} />
        <Route
          path="/selleractivation/:token"
          element={<SellerActivationPage />}
        />
        <Route path="/" index element={<Home />} />
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;

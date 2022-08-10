import Header from "./components/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Account from "./pages/Account";
import Policy from "./pages/Policy";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto overflow-hidden">
          {isAuth ? (
            <div className="md:flex">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Index />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/accounts" element={<Account />}></Route>
                <Route path="/policies" element={<Policy />}></Route>
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

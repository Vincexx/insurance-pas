import Header from "./components/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto overflow-hidden">
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

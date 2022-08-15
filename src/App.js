import Header from "./components/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Policy from "./pages/Policy";
import SideBarLayout from "./components/SideBarLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto overflow-hidden">
          <div className="md:flex">
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route element={<SideBarLayout />}>
                <Route index path="/dashboard" element={<Dashboard />} />
                <Route path="/accounts" element={<Account />} />
                <Route path="/policies" element={<Policy />} />
              </Route>
            </Routes>
          </div>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

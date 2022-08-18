import Header from "./components/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Policy from "./pages/Policy";
import PrivateRoutes from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto overflow-hidden">
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route index path="/dashboard" element={<Dashboard />} exact />
              <Route path="/accounts" element={<Account />} />
              <Route path="/policies" element={<Policy />} />
            </Route>

            <Route element={<PublicRoutes />}>
              <Route index path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

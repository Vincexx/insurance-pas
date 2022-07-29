import Header from "./components/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto overflow-hidden">
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

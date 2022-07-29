import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto overflow-hidden">
        <Login />
      </div>
    </>
  );
}

export default App;

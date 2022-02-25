import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavbarC from "./Components/Navbar/NavbarC";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <NavbarC />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;

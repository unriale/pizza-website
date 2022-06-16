import Hero from "./components/Hero";
import Products from "./components/Products";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import { productData } from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
    </Router>
  );
}

export default App;

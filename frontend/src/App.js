import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import { productData, productData2 } from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productData2} />
      <Footer/>
    </Router>
  );
}

export default App;

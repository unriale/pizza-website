import Hero from "./components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero/>
    </Router>
  );
}

export default App;

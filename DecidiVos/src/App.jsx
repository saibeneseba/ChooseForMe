import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FlipCoin from "./components/FlipCoin";
import Categories from "./components/Categories";


function App() {
  return (
    <Router>
      <Categories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flip" element={<FlipCoin />} />
      </Routes>
    </Router>
  );
}

export default App;
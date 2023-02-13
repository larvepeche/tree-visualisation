import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Evaluator from "./pages/evaluator";
import Navbar from "./components/navbar";
import Tutorial from "./pages/tutorial/index";
import Profile from "./pages/profile/index";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/evaluate" element={<Evaluator />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;

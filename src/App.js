import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Menu>
      </BrowserRouter>
    </div>
  );
}

export default App;

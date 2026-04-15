import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import Dashboard from "./pages/Dashboard";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>


        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
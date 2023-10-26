import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import Search from "./pages/Search";

/* 
  In This File we can add many routes
*/

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/search" element={<Search />} />
          <Route
              path="*"
              element={<div>No Route Exist</div>}
            />  
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

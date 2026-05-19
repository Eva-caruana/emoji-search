import "./App.css";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Line from "./components/Line/Line";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="main-section">
      <Header />
      <Search />
      <Line />
      <Footer />
    </main>
  );
}

export default App;

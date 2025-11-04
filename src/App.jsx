import { BrowserRouter } from "react-router-dom";
import AppRoute from "@routes/AppRoute";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-shell__content">
          <AppRoute />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

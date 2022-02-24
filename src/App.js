import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import contacts from "./data/contacts";
import Homepage from "./pages/Homepage";
import { ContactProvider } from "./context/ContactsContext";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, []);
  return (
    <>
      <ContactProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </ContactProvider>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { ContactProvider } from "./context/ContactsContext";
import FavoritesPage from "./pages/FavoritesPage";
import AddNewPage from "./pages/AddNewPage";
import DetailsPage from "./pages/DetailsPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <ContactProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/add-new" element={<AddNewPage />} />
            <Route path="details/:contactId" element={<DetailsPage />} />
            <Route path="edit/:contactId" element={<EditPage />} />
          </Routes>
        </BrowserRouter>
      </ContactProvider>
    </>
  );
}

export default App;

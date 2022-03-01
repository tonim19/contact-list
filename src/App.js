import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/styles/Global.styled";
import Header from "./components/Header/Header";
import Homepage from "./pages/HomePage/Homepage";
import { ContactProvider } from "./context/ContactsContext";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import EditPage from "./pages/EditPage/EditPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContactProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="details/:contactId" element={<DetailsPage />} />
            <Route path="edit/:contactId" element={<EditPage />} />
          </Routes>
        </BrowserRouter>
      </ContactProvider>
    </>
  );
}

export default App;

import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from "./components/Profil/profil.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={""} />
            <Route path="/notifications" element={""} />
            <Route path="/messages" element={""} />
            <Route path="/bookmarks" element={""} />
            <Route path="/lists" element={""} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/more" element={""} />
          </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </Layout>
  );
}

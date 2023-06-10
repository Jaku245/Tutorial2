import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Registration from './Pages/Registration';
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Registration />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

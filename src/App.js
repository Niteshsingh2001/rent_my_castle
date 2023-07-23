import Navbar from "./components/navbar/navbar.component";
import Authentication from "./routes/authentication/authentication.component";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="auth/*" element={<Authentication />} />
    </Routes>
  );
}

export default App;

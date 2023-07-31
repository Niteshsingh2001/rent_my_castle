import Navbar from "./components/navbar/navbar.component";
import Authentication from "./routes/authentication/authentication.component";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import AlertBox from "./components/alertbox/alertbox.component";
import { useContext } from "react";
import { AlertBoxContext } from "./context/alertbox.context";
import Post from "./routes/post/post.component";

function App() {
  const { message, type } = useContext(AlertBoxContext)
  return (
    <>
      {message && <AlertBox msg={message} type={type} />}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="post/:docID" element={<Post />} />
        </Route>
        <Route path="auth/*" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default App;

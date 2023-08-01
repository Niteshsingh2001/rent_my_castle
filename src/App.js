import Navbar from "./components/navbar/navbar.component";
import Authentication from "./routes/authentication/authentication.component";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import AlertBox from "./components/alertbox/alertbox.component";
import { useContext } from "react";
import { AlertBoxContext } from "./context/alertbox.context";
import Post from "./routes/post/post.component";
import Error_404 from "./components/error404/error404.component";

function App() {
  const { message, type } = useContext(AlertBoxContext)
  return (
    <div className="dark:bg-gray-800 h-screen">
      {message && <AlertBox msg={message} type={type} />}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="post/:docID" element={<Post />} />
          <Route path="*" element={<Error_404 />} />
        </Route>
        <Route path="auth/*" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;

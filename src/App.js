import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./layouts/NavBar/NavBar";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SideBar from "./layouts/SideBar/SideBar";
import User from "./pages/User/User";
import Post from "./pages/Post/Post";
import CreateAnnounce from "./pages/CreateAnnounce/CreateAnnounce";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-announce" element={<CreateAnnounce/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

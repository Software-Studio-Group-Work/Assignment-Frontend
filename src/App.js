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
import MyFeed from "./pages/MyFeed/MyFeed";
import Landmarks from "./pages/Landmarks/Landmarks";
import CreateLandmark from "./pages/CreateLandmark/CreateLandmark";
import { UserContext } from "./contexts/UserContext";
import { ReligionContextProvider } from "./contexts/ReligionContext";
import { useState } from "react";
import EditAnnounce from "./pages/EditAnnounce/EditAnnounce";
import EditPost from "./pages/EditPost/EditPost";

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ReligionContextProvider>
        <BrowserRouter>
          <NavBar isAuth={user} />
          <div className="App">
            <SideBar isAuth={user} role={user?.role} />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-announce" element={<CreateAnnounce />} />
                <Route path="/edit-announce/:id" element={<EditAnnounce />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/edit-post/:id" element={<EditPost />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/user" element={<User />} />
                <Route path="/myfeed" element={<MyFeed />} />
                <Route path="/landmarks" element={<Landmarks />} />
                <Route path="/create-landmark" element={<CreateLandmark />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ReligionContextProvider>
    </UserContext.Provider>
  );
}

export default App;

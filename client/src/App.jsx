import Posts from "./components/posts/Posts";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import { Navigate } from "react-router-dom";
import {
  BrowserRouter as Router, Route, Routes, Link, Navigate
} from "react-router-dom";

function App() {
  const currentUser = false;
  return (<>



    <Topbar />
    <Routes>


      <Route exact path="/"
        element={<Homepage />}
      />
      <Route path="posts" element={<Posts />} />


      <Route path="register"
        element={currentUser ? <Homepage /> : <Register/>}
      />
      <Route path="login"
        element={currentUser ? <Homepage /> : <Login></Login>} />
      <Route path="/post/:id"
       element={<Single />} 
      />
      <Route path="write" element={currentUser ? <Write /> : <Login />} />
      <Route path="settings"
        element={currentUser ? <Settings /> : <Login />}
      />

    </Routes>


  </>

  );
}

export default App;

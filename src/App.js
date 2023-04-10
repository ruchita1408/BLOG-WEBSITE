import TopBar from "./topbar/TopBar";
import Sidebar from "./sidebar/Sidebar";

import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";




function App() {
  const currentUser = true;
  return (
    <>
      <BrowserRouter>
      <TopBar></TopBar>
      <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route path="/write" element={<Write></Write>}></Route>
      <Route path="/about" element={<Sidebar></Sidebar>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/settings" element={<Settings></Settings>}></Route>

       
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

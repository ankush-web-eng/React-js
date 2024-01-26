import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./Pages/Notfound";
import Welcome from "./Pages/Welcome";
import Signup from './Pages/Signup'
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import PrivateComponent from "./Pages/PrivateComponent";
import Todo from "./Pages/Todolist";
import Notes from "./Pages/Notes";

export default function App() {

  const start = localStorage.getItem("user");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Notfound />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateComponent />}></Route>
          <Route path="/home" element={start?<Home />: <Login />} />
          <Route path="/home/to-do" element={start?<Todo />: <Login />} />
          <Route path="/home/notes" element={start?<Notes />: <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

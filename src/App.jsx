import React from "react";
import Header from "../src/components/header/header";
import Add from "./components/adddata/add";
import Deleted from "./components/deletedata/deleted";
import Edit from "./components/editdata/edit";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/addata" element={<Add />} />
        <Route path="/deletedata" element={<Deleted />} />
        <Route path="/editdata" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;

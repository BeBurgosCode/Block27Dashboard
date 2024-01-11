import { useState } from "react";
import DataTable from "./components/dashboard";
import "./App.css";
import React from "react";
import Header from "./components/heading";
import Sidebar from "./components/sidebar";

function App() {
  
 
  return (
   <>
      <h1>Dashboard</h1>
      <Header />
      <Sidebar />
      <DataTable /> 
    </>
  );
}

export default App;



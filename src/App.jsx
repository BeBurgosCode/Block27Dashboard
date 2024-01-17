import { useState } from "react";
//import DataTable from "./components/dashboard";
import "./App.css";
import React from "react";
import Header from "./components/heading";
import Sidebar from "./components/sidebar";
import { Transactions } from "./components/data";

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Header />
      <Sidebar />
     
      {Transactions().map((Transactions)=>(
        <div key={Transactions.txId}>
          <p>{Transactions.txId}</p>
          <p>{Transactions.user}</p>
          <p>{Transactions.date}</p>
          <p>{Transactions.cost}</p>
        </div>
      ))}
      
      
   </div>
  );
}

export default App;


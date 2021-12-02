import React, { useState, useEffect } from "react";
import BillCollection from "./components/BillCollection";
import BillsCast from "./components/BillsCast";

const API = "http://localhost:8002/bills";

export default function App() {
  const [bills, setBills] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setBills(data));
  }, []);

  function handleAddToCast () {
  
  }

  return (
    <div>
      <BillsCast handleAddToCast={handleAddToCast} bills={bills} setBills={setBills}/>
      <BillCollection bills={bills}/>
    </div>
  );
}

import React from "react";
//import "./styles.css";

import { useBarcode } from 'react-barcodes';


export default function App() {
    var x='12345 6789'
  const { inputRef } = useBarcode({
   // value: '12345 6789',
   value: `${x}`,
    options: {
      //background: '#ccffff',
      //displayValue: false,
    }
  });
  
  return (
    <div className="App">
      <h1>react-barcodes</h1>
      <svg ref={inputRef} />
    </div>
  );
}

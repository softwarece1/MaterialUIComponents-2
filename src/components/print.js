import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <div style={{  color: "green" }}>
        good morning ..! welcome to BEL . 
        </div>
        <div style={{ color: "blue" }}>
        Bharat Electronics Limited is an Indian state-owned aerospace and defence company with about nine factories, and several regional offices in India. It is owned by the Indian Government and primarily manufactures advanced electronic products for the Indian Armed Forces        </div>
        
      </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <br/>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Example;
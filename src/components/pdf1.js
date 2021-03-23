import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import jsPDF from 'jspdf';

class Pdf extends Component{

  constructor(){
    super();
    this.state = {
      to:'',
      message:'',
   
    }
  }

  unduhPdf(e){
    e.preventDefault();

    var doc = new jsPDF({
      unit: 'in',
    })
    doc.text(`PDF filename: ${this.state.fileName}`, 0.5, 0.8)
    doc.text(`Recipient: ${this.state.to}`, 0.5, 1.1)
    doc.text(`Message: ${this.state.message}`, 0.5, 1.4)

    doc.save(`${this.state.fileName}`)
  };

render() {

    return (
      <div style={{margin:'20px', fontFamily:'Roboto'}}>

     

        <span style={{width:'100%'}}>
            <p>PDF Filename:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="Input pdf filename that will be downloaded..."
            onChange={(x)=>this.setState({fileName: x.target.value+'.pdf'})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>To:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="Type the recipient here..."
            onChange={(x)=>this.setState({to: x.target.value})} />
            </p>
        </span>

        <span style={{width:'100%'}}>
            <p>Message:
            <textarea id="pesan" type="text" size="30" style={{width:'100%'}}
            placeholder="Type your messages here..."
            onChange={(x)=>this.setState({message: x.target.value})}/>
            </p>
        </span>
        
      

        <center>
        <Button onClick={this.unduhPdf.bind(this)}
        variant="contained" color="secondary" style={{margin:'5px'}}>
          Download PDF
        </Button>
        </center>

      </div>      
    )
}
}
export default Pdf;
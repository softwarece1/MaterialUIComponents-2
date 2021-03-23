import React ,{PureComponent} from 'react';
import jsPDF from 'jspdf';
export default class pdfGenerator extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }
    }
jsPDFGenerator=()=>{
    var doc=new jsPDF('p','pt');
    doc.text(20,20,'This is default text');
   
    doc.text(50,50,'This is text with courier font');
    doc.save("generated.pdf");
    
}

    render(){
        return (<button onClick ={this.jsPDFGenerator}>Generate PDF</button>)

    }
}


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';



class App extends Component {

  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
 }
 
 handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

 createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
      .then((res) => { 
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'generatedDocument.pdf');
      })
    }
  

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input type="number" placeholder="Receipt ID" name="receiptId"    onChange={this.handleChange}/>
        <input type="number" placeholder="Price 3" name="price3" onChange={this.handleChange}/>
        <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange}/>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default App;

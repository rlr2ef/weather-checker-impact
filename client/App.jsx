import React from 'react';
import ZipForm from './ZipForm.jsx';

function App() {

  function constructor() {
    super();
    this.state = {
      zipCode: 0
    }
    //console.log(this.state);
    this.updateZip = this.updateZip.bind(this);
  }

  function updateZip() {
    this.setState({
      updated: this.state.updated
    })
  }

  return (
    <div className="container">
      <h1>What's the weather?</h1>
    </div>
  )
}


export default App;

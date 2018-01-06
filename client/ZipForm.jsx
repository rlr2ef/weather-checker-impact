import React from 'react';

class ZipForm extends React.Component {

  render() {
  return (
  <div id="zip-form">
    <input placeholder='Enter your Zip Code' />
    <button onClick={this.updateZip}>Go</button>
    {
      this.state.updated ?
      <div>
        {this.props.zipCode}
      </div>
      : null
    }
    </div>
  )
  //event.preventDefault();
  }
}

export default ZipForm;

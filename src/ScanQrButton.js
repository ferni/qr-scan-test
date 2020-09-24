import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class ScanQrButton extends Component {

  state = {
    scanning: false
  }

  handleScan = data => {
    if (data) {
      this.setState({scanning: false})
      this.props.onScan(data)
    }
  }
  handleError = err => {
    this.setState({scanning: false})
    console.error(err)
    this.props.onError(err)
  }
  render() {
    return (
      <div>
        {this.state.scanning && <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%', position: 'fixed', height: '100%', top: '0' }}
        />}
        <button onClick={() => this.setState({scanning: true})} {...this.props}>
          {this.props.children}
        </button>
      </div>
    )
  }
}

export default ScanQrButton;
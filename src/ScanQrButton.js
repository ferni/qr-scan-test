import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { ReactComponent as CrossIcon} from "./crossIcon.svg"
import { Box } from 'theme-ui'

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
        {this.state.scanning &&
        <Box sx={{position: 'fixed', top: '0', width: '100%', height: '100%', bg: 'black'}}>
          <Box onClick={() => this.setState({scanning: false})}
            sx={{position: 'absolute', top: '0', right: '0', zIndex: '200'}}>
            <CrossIcon width="40px" height="40px" style={{fill: "#fff"}} />
          </Box>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        </Box>}
        <button onClick={() => this.setState({scanning: true})} {...this.props}>
          {this.props.children}
        </button>
      </div>
    )
  }
}

export default ScanQrButton;
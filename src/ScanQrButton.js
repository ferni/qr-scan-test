import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { ReactComponent as CrossIcon} from "./crossIcon.svg"
import { Box } from 'theme-ui'

const ScanQrButton = ({onScan, onError, children, ...props}) => {
  const [scanning, setScanning] = useState(false)

  const handleScan = data => {
    if (data) {
      setScanning(false)
      onScan(data)
    }
  }
  const handleError = err => {
    setScanning(false)
    console.error(err)
    onError(err)
  }

  return (
    <div>
      {scanning &&
      <Box sx={{position: 'fixed', top: '0', width: '100%', height: '100%', bg: 'black'}}>
        <Box onClick={() => setScanning(false)}
          sx={{position: 'absolute', top: '0', right: '0', zIndex: '200'}}>
          <CrossIcon width="40px" height="40px" style={{fill: "#fff"}} />
        </Box>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
        />
      </Box>}
      <button onClick={() => setScanning(true)} {...props}>
        {children}
      </button>
    </div>
  )
}

export default ScanQrButton;

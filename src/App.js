import React ,{useState} from 'react';
import './App.css';
import ScanQrButton from "./ScanQrButton"
import { ThemeProvider, Text } from 'theme-ui'
import theme from '@makerdao/dai-ui-theme-maker-neue'

function App() {
  const [scanResult, setScanResult] = useState()
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {scanResult && <Text>
          You scanned: <strong>{scanResult}</strong>
        </Text>}
        <ScanQrButton
          onScan={data => setScanResult(data)}
          onError={err => alert('Error: ' + err)}
          sx={{width: '145px', margin: '40% auto 0'}}
        >
          SCAN ADDRESS
        </ScanQrButton>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React ,{useState} from 'react';
import './App.css';
import ScanQrButton from "./ScanQrButton"

function App() {
  const [scanResult, setScanResult] = useState()
  return (
    <div className="App">
      {scanResult && <div>
        You scanned: <strong>{scanResult}</strong>
      </div>}
      <ScanQrButton onScan={data => setScanResult(data)} onError={err => alert('Error: ' + err)}>
        SCAN ADDRESS
      </ScanQrButton>
    </div>
  );
}

export default App;

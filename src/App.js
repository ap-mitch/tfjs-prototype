import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = { message: 'loading' }
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({audio: false, video: true}).then(this.handleSuccess).catch(this.handleError);
  }

  handleSuccess = stream => {
    this.videoRef.current.srcObject = stream;
    this.setState({
      message: 'loaded'
    })
  }

  handleError = error => {
    this.setState({
      message: `navigator.MediaDevices.getUserMedia error: ${error.message} ${error.name}`
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <video id="camera" autoPlay playsInline ref={this.videoRef}></video>
          <p>{this.state.message}</p>
        </header>
      </div>
    );
  }
}

export default App;

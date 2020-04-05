import React from 'react';
import socket from '../socket.js'

class Room extends React.Component {

  constructor() {
    super();
    this.state = {
      roomName: "",
      clients: []
    };

    this._isMounted = false;  // Use _isMounted to avoid setting state in unmounted
  }

  componentDidMount(){
    this._isMounted = true;   // Update _isMounted
    this.setState({roomName: this.props.match.params.id})    // Set roomName

    socket.emit('JoinRoom', this.props.match.params.id)
    socket.on("ClientUpdate",clients => this.joinedRoom(clients)) // Start listener
    
    //console.log(this.props.match.params.id)
  }

  componentWillUnmount() {
    this._isMounted = false;  // Update _isMounted
    socket.removeListener('ClientUpdate');        // Remove listener
    socket.emit('LeaveRoom', this.state.roomName) // Notify server
  }

  joinedRoom(cl){
    this.setState({clients: cl})
  }

  render(){
    return (
      <div className="">
        <label>Hello users:</label>
        {this.state.clients.map((item, index) => (
          <React.Fragment key={index}>
            <div>
              <label>{item}</label><br/>
            </div>
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default Room;
import React from 'react';
import {withRouter} from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      roomName: ""
    };
  }

  handleRoomName(event) {
    this.setState({roomName: event.target.value});
  }

  joinRoom(){
    this.props.history.push("/rooms/"+this.state.roomName);
  }

  render(){
    return (
      <div className="">
        <label>Game room name</label>
        <input type="text" className="" value={this.state.roomName} onChange={(e) => this.handleRoomName(e)} />
        <button className="" onClick={
          ()=>this.joinRoom()
        }>
          Create new game room
        </button>
      </div>
    )
  }
}

export default withRouter(App);

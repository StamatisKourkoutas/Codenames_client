import React from 'react';
import {withRouter} from 'react-router-dom';

import MyNavBar from "./MyNavBar.js"
import '../App.css'

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
        <MyNavBar/>
        <div className="siteTitle">Codenames</div>
        <div className="roomNameForm-div">
          <label className="col-sm-15 col-form-label">Game Room Name</label>
          <div className="col-sm-15">
            <input type="text" className="form-control" placeholder="eg. Enterprise"
              value={this.state.roomName} onChange={(e) => this.handleRoomName(e)}/>
          </div>
          <button className="btn btn-success joinRoombtn" onClick={()=>this.joinRoom()}>Create / Join room</button>
        </div>
      </div>
    )
  }
}

export default withRouter(App);
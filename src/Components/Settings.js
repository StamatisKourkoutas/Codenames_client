import React from 'react';

import MyNavBar from "./MyNavBar.js"
import socket from '../socket.js'

class Settings extends React.Component {

  constructor() {
    super();
    this.state = {
      usernameField: "",
      username: ""
    };
  }

  handleUsername(event) {
    this.setState({usernameField: event.target.value});
  }

  changeUsername(usr){
    this.setState({usernameField: ""})
    socket.emit('ChangeUsername', usr)
  }

  render(){
    return (
      <div className="">
        <MyNavBar/>
        <div className="siteTitle">Codenames</div>
        <div className="roomNameForm-div">
          <label className="col-sm-15 col-form-label">Set Username</label>
          <div className="col-sm-15">
            <input type="text" className="form-control" maxLength="15" placeholder={"eg. Skywalker"}
              value={this.state.usernameField} onChange={(e) => this.handleUsername(e)}/>
          </div>
          <button className="btn btn-success joinRoombtn" onClick={()=>this.changeUsername(this.state.usernameField)}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Settings;

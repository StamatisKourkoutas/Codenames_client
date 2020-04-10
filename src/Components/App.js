import React from 'react';
import {withRouter} from 'react-router-dom';
import {Form} from 'react-bootstrap'

import MyNavBar from "./MyNavBar.js"
import '../App.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      roomName: "",
      language: "english"
    };
  }

  handleRoomName(event) {
    this.setState({roomName: event.target.value});
  }

  handleLanguageChange(event){
    this.setState({
      language: event.target.value
    });
  }

  joinRoom(roomName, language){
    if (roomName!==""){
      this.props.history.push("/rooms/"+roomName+"/"+language);
    }
  }

  render(){
    return (
      <div className="">
        <MyNavBar/>
        <div className="siteTitle">Codenames</div>
        <div className="roomNameForm-div">
          <label className="col-sm-15 col-form-label">Game Room Name</label>
          <div className="col-sm-15">
            <input type="text" className="form-control" maxLength="12" placeholder="eg. Enterprise"
              value={this.state.roomName} onChange={(e) => this.handleRoomName(e)}/>
          </div>
          <label className="col-sm-15 col-form-label">Game Language</label>
          <div>
            <Form.Check inline label="English" type="radio" value="english" checked={this.state.language==="english"} onChange={(e)=>this.handleLanguageChange(e)}></Form.Check>
            <Form.Check inline label="Greek" type="radio" value="greek" checked={this.state.language==="greek"} onChange={(e)=>this.handleLanguageChange(e)}></Form.Check>
          </div>
          <button className="btn btn-success joinRoombtn" onClick={()=>this.joinRoom(this.state.roomName, this.state.language)}>Create / Join room</button>
        </div>
      </div>
    )
  }
}

export default withRouter(App);
import React from 'react';
import {withRouter} from 'react-router-dom';

import MyNavBar from "./MyNavBar.js"
import '../App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomName: "",
      width: 0, height: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(window.innerWidth, window.innerHeight)
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
          <div class="col-sm-15">
            <input type="text" class="form-control" placeholder="eg. Enterprise"
              value={this.state.roomName} onChange={(e) => this.handleRoomName(e)}/>
          </div>
          <button style={{width:this.state.width/2}} className="btn btn-success joinRoombtn" onClick={()=>this.joinRoom()}>Create / Join room</button>
        </div>
      </div>
    )
  }
}

export default withRouter(App);

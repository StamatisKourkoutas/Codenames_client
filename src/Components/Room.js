import React from 'react';

import MyNavBar from "./MyNavBar.js"
import Board from './Board.js'
import socket from '../socket.js'
import SpyMaster from "../spy.svg"

class Room extends React.Component {

  constructor() {
    super();
    this.state = {
      roomName: "",
      clients: {},
      sidePanStyle: "sidePan sidePan-closed"
    };

    this._isMounted = false;  // Use _isMounted to avoid setting state in unmounted
  }

  componentDidMount(){
    this._isMounted = true;   // Update _isMounted
    this.setState({roomName: this.props.match.params.id})    // Set roomName

    socket.emit('JoinRoom', this.props.match.params.id)
    socket.on("ClientsUpdate", cl => { this.setState({clients: cl}) })
    //console.log(this.props.match.params.id)
  }

  componentWillUnmount() {
    this._isMounted = false;  // Update _isMounted
    socket.removeListener('ClientsUpdate');
    socket.emit('LeaveRoom', this.state.roomName) // Notify server
  }

  handleSpymasterChange(){
    var cl = this.state.clients;
    cl[socket.id].spymaster = !this.state.clients[socket.id].spymaster
    socket.emit('SpymasterChange', cl, this.state.roomName)
  }

  openSidePanel(){
    if(this.state.sidePanStyle==="sidePan sidePan-closed"){
    this.setState({sidePanStyle: "sidePan sidePan-open"})
    }else{
      this.setState({sidePanStyle: "sidePan sidePan-closed"})
    }
  }

  render(){
    
    var usr = Object.keys(this.state.clients).map((item) => {
      if (this.state.clients[item].username==="") return item
      else return this.state.clients[item].username
    })

    return (
      <div className="">
        <MyNavBar/>
        <button className="btn btn-dark" onClick={()=>this.openSidePanel()}>☰ Users in room</button>
        <div id="sidePanel" className={this.state.sidePanStyle}>
          <label className="userTitle-lbl">{"Users in room " + this.state.roomName }</label>
          {Object.keys(this.state.clients).map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <label className="user-lbl">{usr[index]}</label>
                {this.state.clients[item].spymaster && <img className="spy-icon" src={SpyMaster} alt="Spymaster"/>}
              </div>
            </React.Fragment>
          ))}
        </div>
        
        <div className="siteTitleRoom">Codenames</div>
        <div className="mainPan">
          <div className="secMainPan">
            {Object.keys(this.state.clients).length>0 && <Board clients={this.state.clients} roomName={this.state.roomName}/>}
            <button className="btn btn-dark toggleSpy-btn" onClick={()=>this.handleSpymasterChange()}>Toggle Spymaster Mode</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Room;
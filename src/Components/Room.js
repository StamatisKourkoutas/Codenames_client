import React from 'react';

import MyNavBar from './MyNavBar.js'
import Board from './Board.js'
import Chat from './Chat.js'
import socket from '../socket.js'
import SpyMaster from "../spy.svg"

class Room extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomName: "",
      language: "",
      clients: {},
      sidePanStyle: "sidePan sidePan-closed",
      userName: ""
    };

    this._isMounted = false;  // Use _isMounted to avoid setting state in unmounted
  }

  componentDidMount(){
    this._isMounted = true;   // Update _isMounted
    // Set roomName, language
    this.setState({roomName: this.props.match.params.id, language: this.props.match.params.language})

    socket.emit('JoinRoom', this.props.match.params.id, this.props.match.params.language)
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

  handleNewGame(){
    socket.emit('NewGame', this.state.roomName, this.state.language);
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
      return this.state.clients[item].username
    })

    return (
      <div className="">
        <MyNavBar/>
        <div className="userOptions-div">
          <button className="btn btn-dark users-btn" onClick={()=>this.openSidePanel()}>☰ Users </button>
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
        </div>
        
        <div className="siteTitle">Codenames</div>
        <div className="mainPan">
          <div className="secMainPan">
            {Object.keys(this.state.clients).length>0 && <Board spymaster={this.state.clients[socket.id].spymaster} roomName={this.state.roomName}/>}
            <button className="btn btn-dark toggleSpy-btn" onClick={()=>this.handleSpymasterChange()}>Toggle Spymaster Mode</button>
            <button className="btn btn-dark newGame-btn" onClick={()=>this.handleNewGame()}>New Game</button>
          </div>
        </div>
        {Object.keys(this.state.clients).length>0 && <Chat roomName={this.state.roomName} id={socket.id} name={this.state.clients[socket.id].username}/>}
      </div>
    )
  }
}

export default Room;
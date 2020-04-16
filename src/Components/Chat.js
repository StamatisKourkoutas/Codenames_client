import React from 'react';
import socket from '../socket';
import "../Chat.css"


class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomName: this.props.roomName,
      id: this.props.id,
      name: this.props.name,
      msgList: {},
      chatPanStyle: "chatPan chatPan-closed",
      msgField: ""
    };
  }

  componentDidMount(){
    socket.on("MsgUpdate", msgL => { console.log(msgL); this.setState({msgList: msgL}) })
  }

  componentWillUnmount() {
    socket.removeListener("MsgUpdate");   // Remove listener
  }
  
  openChatPanel(){
    if(this.state.chatPanStyle==="chatPan chatPan-closed"){
      this.setState({chatPanStyle: "chatPan chatPan-open"})
    }else{
      this.setState({chatPanStyle: "chatPan chatPan-closed"})
    }
  }

  sendMsg(msg){
    if(msg!==""){
      this.setState({msgField: ""});
      socket.emit("MsgChange", this.state.roomName, this.state.name, msg)
    }
  }

  handleMsgField(event) {
    this.setState({msgField: event.target.value});
  }

  scrollToBottom(){
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render(){
    return (
      <div className="chatOptions-div">
        <button className="btn btn-dark chat-btn" onClick={()=>this.openChatPanel()}>Chat</button>
        <div id="chatPanel" className={this.state.chatPanStyle}>
          <div className="conversation-div">
            {Object.values(this.state.msgList).map((item, index) => (
              <React.Fragment key={index}>
                <div>
                  <label className="">{item.username+":"}</label>
                  {" "+item.message}
                </div>
              </React.Fragment>
            ))}
            <div style={{ float:"left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
          {this.state.chatPanStyle==="chatPan chatPan-open" && <div className="send-div">
            <button className="btn btn-dark send-btn" onClick={()=>this.sendMsg(this.state.msgField)}>Send</button>
            <textarea ref={(el) => { this.texta = el; }} className="form-control msg-area" rows="1"
              value={this.state.msgField} onChange={(e) => this.handleMsgField(e)}>
            </textarea>
          </div>}
        </div>
      </div>
    )
  }
}

export default Chat;

import React from 'react';
import socket from '../socket.js'

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomName: this.props.roomName,
      id: this.props.id,
      word: this.props.word,
      type: this.props.type,
      st: this.props.st,
      spymaster: this.props.spymaster
    };
  }

  componentDidUpdate(prevProps){
    if(this.props.st !== prevProps.st){
      this.setState({st: this.props.st})
    }
    if(this.props.spymaster !== prevProps.spymaster){
      this.setState({spymaster: this.props.spymaster})
    }
  }

  openCard(id){
    if(this.state.st==="hidden" && !this.state.spymaster){
      socket.emit('WordListChange', id, this.state.roomName) // Notify server
    }
  }

  revealType(cond){
    if(cond){
      return this.state.type;
    }else{
      return "";
    }
  }

  handleDivStyle(state,type,spymaster){
    if(state==="open"){
      if(type==="red") return "card card-red";
      else if(type==="blue") return "card card-blue";
      else if(type==="neutral") return "card card-neutral";
      else if(type==="bomb") return "card card-bomb";
    }else if(spymaster){
      if(type==="red") return "card card-spy card-spy-red";
      else if(type==="blue") return "card card-spy card-spy-blue";
      else if(type==="neutral") return "card card-spy card-spy-neutral";
      else if(type==="bomb") return "card card-spy card-spy-bomb";
    }
    else if (state==="hidden"){
      return "card card-hover";
    }
  }

  handleLblStyle(state,type,spymaster){
    if(spymaster) return ""
    else if(state==="hidden") return "card-lbl"
  }

  render(){
    return (
      <div className={this.handleDivStyle(this.state.st, this.state.type, this.state.spymaster)} onClick={()=>this.openCard(this.state.id)}>
        <label className={this.handleLblStyle(this.state.st, this.state.type, this.state.spymaster)}>{this.state.word /*+ " " + this.state.st + " " + this.revealType(this.state.st==="open" ||this.state.spymaster)*/}</label>
      </div>
    )
  }
}

export default Card;
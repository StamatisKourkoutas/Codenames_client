import React from 'react';

import Card from './Card.js'
import socket from '../socket.js'

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomName: this.props.roomName,
      clients: this.props.clients,
      wordList: [],
      cardList: []
    };
  }

  componentDidMount(){
    socket.on("BoardUpdate", (wordList) => {this.setState({wordList: wordList}) })
  }

  componentWillUnmount() {
    socket.removeListener('BoardUpdate');        // Remove listener
  }

  componentDidUpdate(prevProps){
    if(this.props.clients !== prevProps.clients){
      this.setState({clients: this.props.clients})
    }
  }

  render(){
    var board = this.state.wordList.map((item,index) => {
      return <React.Fragment key={index}>
        <Card
          id={item.id}
          word={item.word}
          type={item.type}
          st={item.state}
          roomName={this.state.roomName}
          spymaster={this.state.clients[socket.id].spymaster}
        />
      </React.Fragment>
    })

    return (
      <div className="">
        <div className="board">{board}</div>
      </div>
    )
  }
}

export default Board;
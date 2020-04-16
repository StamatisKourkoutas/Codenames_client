import React from 'react';

import Card from './Card.js'
import socket from '../socket.js'

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomName: this.props.roomName,
      spymaster: this.props.spymaster,
      wordList: [],
      cardList: [],
      redScore: 9,
      blueScore: 8
    };
  }

  componentDidMount(){
    socket.on("BoardUpdate", (wordList) => {
      var scores = this.calculateScore(wordList);
      this.setState({wordList: wordList, redScore: scores[0], blueScore: scores[1]});
    })
  }

  componentWillUnmount() {
    socket.removeListener('BoardUpdate');        // Remove listener
  }

  componentDidUpdate(prevProps){
    if(this.props.spymaster !== prevProps.spymaster){
      this.setState({spymaster: this.props.spymaster})
    }
  }

  calculateScore(wordList){
    var redScore = 9;
    var blueScore = 8;
    wordList.forEach(item => {
      if(item.state==="open"){
        if(item.type==="red"){
          redScore -= 1; 
        }else if(item.type==="blue"){
          blueScore -= 1;
        }
      }
    });
    return [redScore, blueScore]
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
          spymaster={this.state.spymaster}
        />
      </React.Fragment>
    })

    return (
      <div className="">
        Score: <label className="redScore-lbl">{this.state.redScore}</label>-<label className="blueScore-lbl">{this.state.blueScore}</label>
        <div className="board">{board}</div>
      </div>
    )
  }
}

export default Board;
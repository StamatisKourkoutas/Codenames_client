import React from 'react';
//import logo from './logo.svg';
//import './App.css';


class App extends React.Component {

  render(){
    return (
      <div className="">
        <label>Game room name</label>
        <input type="text" className=""/>
        <button className="" onClick={
          function() { alert('click'); }
        }>
          Create new game room
        </button>
      </div>
    )
  }
}

export default App;

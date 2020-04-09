import React from 'react';

import MyNavBar from "./MyNavBar.js"

class Instructions extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render(){
    return (
      <div className="">
        <MyNavBar/>
        <div className="siteTitle">Codenames</div>
        <div className="instructions-div">
          <p>The popular multiplayer game Codenames can be played online
            through this website. This website is designed with the assumption
            that users can communicate with each other, so that they can share
            their clues.<br/><br/>

            Users can create and connect to private virtual rooms which contain a
            board to play the codenames game collaborativelly with their friends.

            To create a new room or join an existing one visit the homepage, write
            the room name and press the respective button.<br/><br/>
          
            When inside a room you can see all the users inside this room by
            pressing the respective ☰ button. If a user is in Spymaster Mode
            there will be a magnifying glass icon right next to his name. You
            can change your own name so that other people may recognise you.
            To do this visit the settings menu found in the upper right corner
            of the website.<br/><br/>
          </p>
        </div>
      </div>
    )
  }
}

export default Instructions;

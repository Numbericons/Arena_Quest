import React from 'react';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   players: props.players
    // }
  }
  render(){
    return (
      <div>
        <h1>Board</h1>
        {this.props.players[0].render()}
        <h2>Player 2: {this.props.players[1].name}</h2>
      </div>
    );
  }
}
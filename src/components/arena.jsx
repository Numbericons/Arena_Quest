import React from 'react';
import Board from './board';
import Human from './human';
import Monster from './monster';

export default class Arena extends React.Component {
  constructor(props) {
    super(props);
  }

  // newRound(){
  //   let players = this.createPlayers();
  //   this.setState({board: new Board(players)})
  // }

  createPlayers(){
    let p1 = new Human();
    let p2 = new Monster();
    return [p1, p2];
  }

  render() {
    let players = this.createPlayers();
    return (
      <div className='arena'>
        <h1 className='arena-header'>Arena Quest</h1>
        < Board players={players} />
      </div>
    )
  }
}
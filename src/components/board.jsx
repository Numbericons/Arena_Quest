import React from 'react';
// import Human from './human';
// import Monster from './monster';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.currP = 0;
    // this.state = {
    //   p1Hp: this.props.p1Hp,
    //   p1Attk: this.props.p1Attk,
    //   p1Ac: this.props.p1Ac,
    //   p1Hit: this.props.p1Hit,
    //   p2Hp: this.props.p2Hp,
    //   p2Attk: this.props.p2Attk,
    //   p2Ac: this.props.p2Ac,
    //   p2Hit: this.props.p2Hit
    // }
  }

  oppPlayer() {
    return (this.currP === 0) ? 1 : 0;
  }

  toggleCurrP(){
    this.currP = this.oppPlayer();
  }

  reset(){
    this.toggleCurrP();
    this.compTurn();
  }
  
  compTurn(){
    // this.attack();
    // this.toggleCurrP();
  }

  render(){
    return (
      <div className="board">
        <div className="board-players">
          {this.props.player1}
          {this.props.player2}
        </div>
        <div className="board-btn">
          <button className="board-btn-attk" onClick={this.props.attack}>Attack</button>
          <button className="board-btn-defend" onClick={this.props.defend}>Defend</button>
          {this.props.special && <button className="board-btn-special" onClick={this.props.special}>Special</button>}
        </div>
      </div>
    );
  }
}
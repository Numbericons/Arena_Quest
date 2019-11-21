import React from 'react';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.currP = 0;
    this.attack = this.attack.bind(this);
    this.player1 = React.createRef();
    this.player2 = React.createRef();
  }

  oppPlayer() {
    return (this.currP === 0) ? 1 : 0;
  }

  toggleCurrP(){
    this.currP = this.oppPlayer();
  }

  attack() {
    // let attacker = this.props.players[this.currP];
    // let defender = this.props.players[this.oppPlayer()];
    // let defender = this.props.player2
    // defender.setState({'hp': 5});
    // defender.take(5);
    debugger
    console.log(5);
  }

  render(){
    debugger
    return (
      <div className="board">
        <div className="board-players">
          {this.props.players[0].render()}
          {this.props.players[1].render()}
        </div>
        <div className="board-btn">
          <button className="board-btn-attk" onClick={this.attack}>Attack</button>
        </div>
      </div>
    );
  }
}
import React from 'react';
import Human from './human';
import Monster from './monster';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.currP = 0;
    this.attack = this.attack.bind(this);
    this.state = {
      p1Hp: this.props.p1Hp,
      p1Attk: this.props.p1Attk,
      p2Hp: this.props.p2Hp,
      p2Attk: this.props.p2Attk,
    }
    // this.player1 = React.createRef();
  }

  oppPlayer() {
    return (this.currP === 0) ? 1 : 0;
  }

  toggleCurrP(){
    this.currP = this.oppPlayer();
  }

  attack() {
    if (this.currP === 0) {
      this.setState({p2Hp: this.state.p2Hp - this.state.p1Attk})
    } else {
      this.setState({p1Hp: this.state.p1Hp - this.state.p2Attk})
    }
  }

  render(){
    return (
      <div className="board">
        <div className="board-players">
          < Human hp={this.state.p1Hp} attk={this.state.p1Attk}/>
          < Monster hp={this.state.p2Hp} attk={this.state.p2Attk}/>
          {/* {this.props.players[1].render()} */}
        </div>
        <div className="board-btn">
          <button className="board-btn-attk" onClick={this.attack}>Attack</button>
        </div>
      </div>
    );
  }
}
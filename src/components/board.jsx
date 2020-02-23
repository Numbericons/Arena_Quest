import React from 'react';
// import Human from './human';
// import Monster from './monster';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.currP = 0;
  }

  render(){
    const arr = this.props.specArr;
    return (
      <div className="board">
        <div className="board-players">
          {this.props.player1}
          {this.props.player2}
        </div>
        <div className="board-btn">
          <button className="board-btn-attk" onClick={this.props.attack}>Attack</button>
          <button className="board-btn-defend" onClick={this.props.defend}>Defend</button>
          {arr[0] && <button className="board-btn-special" onClick={this.props.special1}>Special 1</button>}
          {arr[1] && <button className="board-btn-special" onClick={this.props.special2}>Special 2</button>}
          {arr[2] && <button className="board-btn-special" onClick={this.props.special3}>Special 3</button>}
        </div>
      </div>
    );
  }
}
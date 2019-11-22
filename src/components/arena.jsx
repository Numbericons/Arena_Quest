import React from 'react';
import Board from './board';

export default class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.round = 1;
    // this.player1 = React.createRef();
    // this.player2 = React.createRef();
    this.state = {
      p1Hp: 20,
      p1Atk: 5,
      p2Hp: 10,
      p2Atk: 3
    }
  }

  // createPlayers(){
  //   let p1 = < Human ref={this.player1}/>
  //   let p2 = < Monster ref={this.player2}/>
  //   return [p1, p2];
  // }

  render() {
    // let players = this.createPlayers();
    return (
      <div className='arena'>
        <div className='arena-header'>
          <h1 className='arena-header-text'>Arena Quest</h1>
        </div>
        < Board p1Hp={this.state.p1Hp} p1Attk={this.state.p1Atk} 
                p2Hp={this.state.p2Hp} p2Attk={this.state.p2Atk}
        />
        {/* < Board players={players} player1={this.player1} player2={this.player2} /> */}
        {/* < Board player1={players[0]} player2={players[1]} /> */}
        {/* < Board players={players} /> */}
      </div>
    )
  }
}
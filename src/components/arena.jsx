import React from 'react';
import Board from './board';
import Human from './human';
import Monster from './monster';

export default class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.round = 1;
    this.state = {
      p1MaxHp: 20,
      p1Hp: 20,
      p1Attk: 5,
      p1Ac: 2,
      p1ToHit: 1,
      p2MaxHp: 10,
      p2Hp: 10,
      p2Attk: 3,
      p2Ac: 1,
      p2ToHit: 0
    }
  }

  attack(){

  }

  human(){
    return <Human maxHp={this.state.p1MaxHp} hp={this.state.p1Hp} attk={this.state.p1Attk} ac={this.state.p1Ac} toHit={this.state.p2ToHit}></Human>
  }

  monster(){
    return <Monster maxHp={this.state.p2MaxHp} hp={this.state.p2Hp} attk={this.state.p2Attk} ac={this.state.p2Ac} toHit={this.state.p2ToHit}></Monster>
  }

  render() {
    let player1 = this.human();
    let player2 = this.monster();
    return (
      <div className='arena'>
        <div className='arena-header'>
          <h1 className='arena-header-text'>Arena Quest</h1>
        </div>
        {/* < Board p1Hp={this.state.p1Hp} p1Attk={this.state.p1Atk} p1Ac={this.state.p1Ac} p1Hit={this.state.p2Hit}
                p2Hp={this.state.p2Hp} p2Attk={this.state.p2Atk} p2Ac={this.state.p1Ac} p2Hit={this.state.p2Hit}

        /> */}
        <Board p1={player1} p2={player2}></Board>
      </div>
    )
  }
}
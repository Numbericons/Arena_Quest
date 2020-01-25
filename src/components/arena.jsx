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
      p2ToHit: 0,
      currP: 0
    }
    this.attack = this.attack.bind(this);
  }

  attack(){
    let d20 = Math.ceil(Math.random() * 20);
    if (d20 === 0) d20 = 1;
    if (this.state.currP === 0) {
      if (d20 >= 10 + this.state.p2Ac - this.state.p1ToHit) {
        this.setState({ p2Hp: this.state.p2Hp - this.state.p1Attk })
      }
    } else {
      if (d20 >= 10 + this.state.p1Ac - this.state.p2ToHit) {
        this.setState({ p1Hp: this.state.p1Hp - this.state.p2Attk })
      }
    }
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
        <Board player1={player1} player2={player2} attack={this.attack}></Board>
      </div>
    )
  }
}
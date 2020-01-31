import React from 'react';
import Board from './board';
import Human from './human';
import Monster from './monster';

export default class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.round = 1;
    this.state = {
      p1MaxHp: 20, p1Hp: 20, p1Attk: 5,
      p1Ac: 2,
      p1ToHit: 1,
      p1init: 6,
      p1defended: false,
      // p1CDMax: 2,
      // p1CDCurr: 0,
      p1Specials: [[true, 'Tacs', 2, 0, 10],  //[active?, name, cdMax, cdCurrent, Damage]
                  [true, 'Brick', 3, 0, 99], [false, 'Whip', 4, 0, 3]],
      p2MaxHp: 10,
      p2Hp: 10,
      p2Attk: 3,
      p2Ac: 1,
      p2ToHit: 0,
      p2init: 7,
      p2defended: false,
      currP: 0
    }
    this.attack = this.attack.bind(this);
    this.defend = this.defend.bind(this);
    this.special = this.special.bind(this);
  }

  compAttack(){
    let d20 = Math.ceil(Math.random() * 20);
    if (d20 === 0) d20 = 1;
    if (d20 >= 10 + this.state.p1Ac - this.state.p2ToHit) {
      const play1Hp = this.state.p1Hp - this.state.p2Attk;
      this.setState({ p1Hp: play1Hp })
      this.death('human', play1Hp);
    }
  }

  attack(){
    if (this.state.p1defended) this.setState({ p1Ac: this.state.p1Ac - 5 });
    this.setState({ p1defended: false, p1CDCurr: this.getCD() });
    let d20 = Math.ceil(Math.random() * 20);
    if (d20 === 0) d20 = 1;
    if (d20 >= 10 + this.state.p2Ac - this.state.p1ToHit) {
      const play2Hp = this.state.p2Hp - this.state.p1Attk;
      this.setState({ p2Hp: play2Hp })
      if (!this.death('comp', play2Hp)) this.compAttack()      
    } else {
      this.compAttack();
    }
  }

  getCD(){
    return this.state.p1CDCurr === 0 ? 0 : this.state.p1CDCurr - 1;
  }

  defend(){
    if (!this.state.p1defended) this.setState({ p1Ac: this.state.p1Ac + 5 });
    this.setState({ p1defended: true, p1CDCurr: this.getCD() });
    this.compAttack();
  }

  death(defender, hp){
    if (defender === 'human'){
      if (hp <= 0) {
        alert('Death has come too early for the stable boy. Brave and bright, his tireless efforts soaked like his blood into the unforgiving floor of the arena.')
      }
    } else {
      if (hp <= 0) {
        alert('You vanquished your foes and subsumed their titles, lands, and debts. Rising from birth as a mere stable boy, you are now the Champion of the Arena!')
      }
    }
    return hp <= 0;
  }

  human() {
    return <Human
      maxHp={this.state.p1MaxHp} hp={this.state.p1Hp} attk={this.state.p1Attk}
      ac={this.state.p1Ac} toHit={this.state.p2ToHit} init={this.state.p1Init}
      s1name={this.state.p1Specials} cdMax={this.state.p1CDMax} cdCurr={this.state.p1CDCurr}>
    </Human>
  }
 
  monster(){
    return <Monster
            maxHp={this.state.p2MaxHp} hp={this.state.p2Hp} attk={this.state.p2Attk}
            ac={this.state.p2Ac} toHit={this.state.p2ToHit} init={this.state.p2Init}
            >
          </Monster>
  }

  special(idx){
    if (this.state.p1defended) this.setState({ p1Ac: this.state.p1Ac - 5 });
    this.setState({ p1defended: false });
    let d20 = Math.ceil(Math.random() * 20);
    if (d20 === 0) d20 = 1;
    if (d20 >= 10 + this.state.p2Ac - this.state.p1ToHit) {
      const play2Hp = this.state.p2Hp - this.state.p1Specials[idx][4];
      this.setState({ p2Hp: play2Hp })
      if (!this.death('comp', play2Hp)) this.compAttack()
    } else {
      this.compAttack();
    }
    let specials = this.state.p1Specials;
    specials[idx][3] = specials[idx][2];
    this.setState({ p1Specials: specials });
  }

  render() {
    const player1 = this.human();
    const player2 = this.monster();
    const special1 = this.state.p1Specials[0][0] ? this.special : null;
    const special2 = this.state.p1Specials[1][0] ? this.special : null;
    const special3 = this.state.p1Specials[2][0] ? this.special : null;
    return (
      <div className='arena'>
        <div className='arena-header'>
          <h1 className='arena-header-text'>Arena Quest</h1>
        </div>
        <Board player1={player1} player2={player2} attack={()=>this.attack()} 
          defend={this.defend} //special1={special1}
          >
        </Board>
      </div>
    )
  }
}
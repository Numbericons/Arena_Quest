import React from 'react';

export default class Monster extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Goblin';
    this.maxHp = 10;
    this.class = 'warrior';
    this.initiative = 6;
    this.toHit = 8;
    this.attack = [['punch', 3]];
    this.image = 'https://cdn3.iconfinder.com/data/icons/mythical-creatures-color/300/07-512.png';
    // this.state = {
    //   'hp': this.props.hp
    // }

    this.take = this.take.bind(this);
  }

  take(num) {
    let hpTotal = this.state.hp - num;
    this.setState({'hp': hpTotal});
  }

  render() {
    return (
      <div className="player">
        <h3>Name: {this.name}</h3>
        <img className='player-img' src={this.image} alt="" />
        <ul className='player-attr'>
          <li>Class: {this.class}</li>
          <li>Hit Points: {this.props.hp}/{this.maxHp}</li>
          <li>Initiative: {this.initiative}</li>
          <li>To Hit: {this.toHit}</li>
          <li>Attack(s): {this.attack}</li>
        </ul>
      </div>
    );
  }
}
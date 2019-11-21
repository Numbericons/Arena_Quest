import React from 'react';

export default class Human extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Fred';
    this.maxHp = 20;
    this.hp = 20;
    this.class = 'warrior';
    this.initiative = 5;
    this.toHit = 10;
    this.attack = [['punch', 5]];
    this.image = 'https://wiki.guildwars2.com/images/thumb/5/56/Warrior_04_concept_art.png/350px-Warrior_04_concept_art.png'
  }
  
  render() {
    return (
      <div className="player">
        <h3>Name: {this.name}</h3>
        <img className = 'player-img' src={this.image} alt=""/>
        <ul className='player-attr'>
          <li>Class: {this.class}</li>
          <li>Hit Points: {this.hp}/{this.maxHp}</li>
          <li>Initiative: {this.initiative}</li>
          <li>To Hit: {this.toHit}</li>
          <li>Attack(s): {this.attack}</li>
        </ul>
      </div>
    );
  }
}

import React from 'react';

export default class Human extends React.Component {
  constructor(props) {
    super(props);
    this.maxHp = props.maxHp;
    this.hp = props.hp;
    this.toHit = props.toHit;
    this.ac = props.ac;
    this.attack = [['punch', props.attk]];
    this.name = 'Fred';
    this.class = 'Warrior';
    this.initiative = 5;
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
          <li>Attack(s): {this.attack[0][0]} - {this.attack[0][1]}dmg</li>
        </ul>
      </div>
    );
  }
}

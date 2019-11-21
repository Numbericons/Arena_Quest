import React from 'react';

export default class Monster extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Goblin';
    this.hitpoints = 20;
    this.class = 'warrior';
    this.initiative = 5;
    this.toHit = 10;
    this.attack = [['punch', 5]];
    this.image = 'https://icon-library.net/images/goblin-icon/goblin-icon-1.jpg';
  }
  render() {
    return (
      <h1>This is the monster class!</h1>
    );
  }
}
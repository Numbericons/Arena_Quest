import React from 'react';

export default function Human(props) {
  const maxHp = props.maxHp;
  const hp = props.hp;
  const toHit = props.toHit;
  const ac = props.ac;
  const specials = props.specials;
  const attack = [['punch', props.attk]];
  const name = 'Fred';
  const playerClass = 'warrior';
  const init = props.init;
  const image = 'https://wiki.guildwars2.com/images/thumb/5/56/Warrior_04_concept_art.png/350px-Warrior_04_concept_art.png';

  return (
    <div className="player">
      <h3>Name: {name}</h3>
      <img className='player-img' src={image} alt="" />
      <ul className='player-attr'>
        <li>Class: {playerClass}</li>
        <li>Hit Points: {hp}/{maxHp}</li>
        <li>Initiative: {init}</li>
        <li>To Hit: {toHit}</li>
        <li>AC: {ac}</li>
        <li>Attack(s): {attack[0][0]} - {attack[0][1]}dmg</li>
        <li>Specials:</li>
        <ol>
          <li>{specials}</li>
          {/* <li>{specials[1]} -> Cooldown: {specials[2]}/{specials[3]}</li> */}
        </ol>
      </ul>
    </div>
  );
}



// import React from 'react';

// export default class Human extends React.Component {
//   constructor(props) {
//     super(props);
//     this.maxHp = props.maxHp;
//     this.hp = props.hp;
//     this.toHit = props.toHit;
//     this.ac = props.ac;
//     this.attack = [['punch', props.attk]];
//     this.name = 'Fred';
//     this.class = 'Warrior';
//     this.initiative = 5;
//     this.image = 'https://wiki.guildwars2.com/images/thumb/5/56/Warrior_04_concept_art.png/350px-Warrior_04_concept_art.png'
//   }
  
//   render() {
//     return (
//       <div className="player">
//         <h3>Name: {this.name}</h3>
//         <img className = 'player-img' src={this.image} alt=""/>
//         <ul className='player-attr'>
//           <li>Class: {this.class}</li>
//           <li>Hit Points: {this.hp}/{this.maxHp}</li>
//           <li>Initiative: {this.initiative}</li>
//           <li>To Hit: {this.toHit}</li>
//           <li>Attack(s): {this.attack[0][0]} - {this.attack[0][1]}dmg</li>
//         </ul>
//       </div>
//     );
//   }
// }

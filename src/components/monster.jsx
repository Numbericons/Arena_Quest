import React from 'react';

export default function Monster(props) {
    let maxHp = props.maxHp;
    let hp = props.hp;
    let toHit = props.toHit;
    let ac = props.ac;
    let attack = [['punch', props.attk]];
    let name = 'Goblin';
    let playerClass = 'warrior';
    let initiative = 6;
    let image = 'https://cdn3.iconfinder.com/data/icons/mythical-creatures-color/300/07-512.png';
    
    return (
      <div className="player">
        <h3>Name: {name}</h3>
        <img className='player-img' src={image} alt="" />
        <ul className='player-attr'>
          <li>Class: {playerClass}</li>
          <li>Hit Points: {hp}/{maxHp}</li>
          <li>Initiative: {initiative}</li>
          <li>To Hit: {toHit}</li>
          <li>Attack(s): {attack[0][0]} - {attack[0][1]}dmg</li>
        </ul>
      </div>
    );
}
// import React from 'react';

// export default class Monster extends React.Component {
//   constructor(props) {
//     super(props);
//     this.maxHp = props.maxHp;
//     this.hp = props.hp;
//     this.toHit = props.toHit;
//     this.ac = props.ac;
//     this.attack = [['punch', props.attk]];
//     this.name = 'Goblin';
//     this.class = 'warrior';
//     this.initiative = 6;
//     this.image = 'https://cdn3.iconfinder.com/data/icons/mythical-creatures-color/300/07-512.png';

//     this.take = this.take.bind(this);
//   }

//   take(num) {
//     let hpTotal = this.state.hp - num;
//     this.setState({'hp': hpTotal});
//   }

//   render() {
//     return (
//       <div className="player">
//         <h3>Name: {this.name}</h3>
//         <img className='player-img' src={this.image} alt="" />
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
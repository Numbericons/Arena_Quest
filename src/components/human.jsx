import React from 'react';

export default function Human(props) {
  const maxHp = props.maxHp;
  const hp = props.hp;
  const toHit = props.toHit;
  const ac = props.ac;
  const attack = [['punch', props.attk]];
  const name = 'Fred';
  const playerClass = 'warrior';
  const init = props.init;
  const image = 'https://wiki.guildwars2.com/images/thumb/5/56/Warrior_04_concept_art.png/350px-Warrior_04_concept_art.png';
  const specials = props.specials.map((special) => {
    return `${special[1]} Damage: ${special[4]} Cooldown: ${special[3]}/${special[2]}`
  });

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
        </ol>
      </ul>
    </div>
  );
}

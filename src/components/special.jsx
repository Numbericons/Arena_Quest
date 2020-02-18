import React from 'react';

export default function Special(props) {
  return(
    <div>
      {`${props.special[1]} Damage: ${props.special[4]} Cooldown: ${props.special[3]} /${props.special[2]}`}
    </div>
  );
}
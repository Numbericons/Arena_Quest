import React from 'react';

export default function Special(props) {
  const cdText = props.special[3] === 0 ? 'Ready!' : `Cooldown: ${ props.special[3]} /${props.special[2]}`;
  return(
    <div>
      {`${props.special[1]} Damage: ${props.special[4]} ${cdText}`}
    </div>
  );
}
import React from 'react';
import Board from './board';

export default class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.round = 1;
    this.state = {
      p1Hp: 20,
      p1Atk: 5,
      p1Ac: 2,
      p2Hp: 10,
      p2Atk: 3,
      p2Ac: 1
    }
  }

  render() {
    return (
      <div className='arena'>
        <div className='arena-header'>
          <h1 className='arena-header-text'>Arena Quest</h1>
        </div>
        < Board p1Hp={this.state.p1Hp} p1Attk={this.state.p1Atk} p1Ac={this.state.p1Ac}
                p2Hp={this.state.p2Hp} p2Attk={this.state.p2Atk} p2Ac={this.state.p1Ac}
        />
      </div>
    )
  }
}
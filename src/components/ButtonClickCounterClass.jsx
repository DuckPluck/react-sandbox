import React from 'react';

export class ButtonClickCounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleClick = () => {
    this.setState({
        counter: this.state.counter + 1,
    });
    console.log(this.state.counter + 1, 'right button');
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>{this.state.counter}</button>
        </div>
    );
  }
}
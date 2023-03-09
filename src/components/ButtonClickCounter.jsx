import React, {useState} from 'react';

export function ButtonClickCounterFunc(props) {
  const [counter, useCounter] = useState(0);

  function handleClick(e) {
    useCounter(counter + 1);
    console.log(counter + 1, 'left button');
    props.handleListFunc();
  }

  return (
      <div>
        <button className='btn-func' onClick={handleClick}>{counter}</button>
      </div>
  );
}


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
    this.props.handleListClass();
  }

  render() {
    return (
        <div>
          <button className='btn-class' onClick={this.handleClick}>{this.state.counter}</button>
        </div>
    );
  }
}

export const buttons = [<ButtonClickCounterFunc className='btn-func'/>, <ButtonClickCounterClass className='btn-class'/>]
import React, {createRef, useRef, useState} from 'react';

export class RefTextClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighlighted: false,
    };
  }

  highlightedText = createRef();

  clickHandle = () => {
    this.setState(prevState => ({isHighlighted: !prevState.isHighlighted}));
    if (!this.state.isHighlighted) {
      this.highlightedText.current.className += 'highlighted ';
      console.log('Text highlighted by ref');
    } else {
      this.highlightedText.current.classList.remove('highlighted');
      console.log('Text normalised by ref');
    }

  };

  render() {
    return (
        <>
          <div>
            <p ref={this.highlightedText}>If you press the button this text will be highlighted by ref</p>
            <button onClick={this.clickHandle}>Highlight is {this.state.isHighlighted ? 'on' : 'off'}</button>
          </div>
          <hr />
        </>
    );
  }
}



export function RefTextFunc(props) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const highlightedText = useRef();

  function clickHandle() {
    setIsHighlighted(!isHighlighted);
    if (!isHighlighted) {
      highlightedText.current.className += 'highlighted ';
      console.log('Text highlighted by ref hook');
    } else {
      highlightedText.current.classList.remove('highlighted');
      console.log('Text normalised by ref hook');
    }
  }

  return (
      <>
        <div>
          <p>If you press the button this <span ref={highlightedText}>text</span> will be highlighted by ref hook</p>
          <button onClick={clickHandle}>Highlight is {isHighlighted ? 'on' : 'off'}</button>
        </div>
        <hr />
      </>
  );
}
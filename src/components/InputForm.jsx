import React from 'react';

export class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: 'Moscow'}
  }

  searchCity = (str) => {
    // fetch(url)
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {

    }
  }

  render() {
    return (
        <>
          <div>
            <input
                type="search"
                value={this.state.search}
                onChange={e => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey} />
          </div>
        </>
    );
  }
}
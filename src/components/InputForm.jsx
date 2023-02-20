import React from 'react';

export class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: 'Moscow'}
  }

  getWeather = this.props.getWeather

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.setState({search: e.target.value});
      this.getWeather(this.state.search);
    }
  }

  render() {
    return (
        <>
          <div>
            <input
                type="search"
                value={this.state.search}

                onChange={e => {
                  this.setState({search: e.target.value});
                  this.getWeather(this.state.search); }}

                onKeyDown={this.handleKey} />
          </div>
        </>
    );
  }
}
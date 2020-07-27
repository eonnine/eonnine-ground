import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'home'
    }
  }
  render() {
    return (
      <body>
        {this.state.message}
      </body>
    )
  }
}

export default Home;
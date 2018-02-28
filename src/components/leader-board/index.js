import React from 'react';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: undefined,
    };
  }

  componentDidMount = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        userName: this.props.userName,
      }),
      headers,
    })
      .then(response => response.text())
      .then(jsonString => JSON.parse(jsonString))
      .then((body) => {
        if (body.statusCode === 200) {
          return body.data;
        }
        return undefined;
      })
      .then(score => Promise.all([
        score,
        fetch('/api/users/top/5', {
          method: 'POST',
          body: JSON.stringify({
            userName: this.props.userName,
          }),
          headers,
        })
          .then(response => response.text())
          .then(jsonString => JSON.parse(jsonString))]))
      .then(([scoreResponse, topUsers]) => {
        this.setState({
          ...this.state,
          score: scoreResponse.score,
          total: scoreResponse.total,
          topUsers,
        });
      });
  }

  render = () => (
    <div>
      {
        this.state.score ?
          (
            <div >
              {this.state.score}/{this.state.total}
            </div>
          )
          : (
            <div />
          )
      }
    </div>
  );
}
export default LeaderBoard;

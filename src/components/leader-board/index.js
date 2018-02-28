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
    fetch('/api/users/score', {
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
          method: 'GET',
          headers,
        })
          .then(response => response.text())
          .then(jsonString => JSON.parse(jsonString))]))
      .then(([scoreResponse, topUsers]) => {
        this.setState({
          ...this.state,
          score: scoreResponse.score,
          total: scoreResponse.total,
          topUsers: topUsers.data,
        });
      });
  }

  render = () => (
    <div>
      {
        this.state.score ?
          (
            <div>
              <div>Your score</div>
              <div><span>{this.state.score}</span>/<span>{this.state.total}</span></div>


              {this.state.topUsers.map(user => (
                <div key={`leaderboard-${user.userName}`}>
                  <div>{user.userName}</div>
                  <div>{user.score}</div>
                </div>
              ))}
            </div>
          )
          :
          (
            <div />
          )
      }
    </div>
  );
}
export default LeaderBoard;
import React from 'react';

import * as styles from './leader-board.style';
import * as globalStyles from '../../lib/global.style';
import TitleBar from '../title-bar';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        const orderedTopUsers = topUsers.data.sort((userA, userB) =>
          userA.score < userB.score);

        this.setState({
          ...this.state,
          score: scoreResponse.score,
          total: scoreResponse.total,
          topUsers: orderedTopUsers,
        });
      });
  }

  render = () => (
    <div style={styles.container}>
      <TitleBar
        brand="Quizzy"
        message={`Hello ${this.props.userName}`}
      />
      {
        this.state.score ?
          (
            <div>
              <div style={styles.yourScore}>Your Score</div>
              <div style={styles.scoreContainer}>
                <span style={styles.scoreNumerator}>{this.state.score}</span>
                <span style={styles.scoreDivider}>/</span>
                <span style={styles.scoreDenominator}>{this.state.total}</span>
              </div>

              <div style={styles.leaderBoardContainer}>
                <div style={styles.leaderBoardHeading}>Leaderboard</div>
                {this.state.topUsers.map((user, index) => (
                  <div
                    style={
                      (user.userName === this.props.userName) ?
                        {
                          ...styles.topUser,
                          backgroundColor: '#8FB4F6',
                        }
                        :
                        styles.topUser}
                  >
                    <div style={{
                      ...globalStyles.fonts,
                      fontSize: '32px',
                    }}
                    >{index + 1}.
                    </div>
                    <div style={{
                      ...globalStyles.fonts,
                      fontSize: '32px',
                      color: 'white',
                      marginLeft: '8px',
                    }}
                    >{user.userName}
                    </div>
                    <div style={styles.topUserScore} > {user.score}</div>
                  </div>
                ))}
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
              }}
              >
                <button
                  style={styles.playAgainButton}
                  onClick={() => this.props.onPlayAgainButtonClick()}
                >Play Again
                </button>
              </div>
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

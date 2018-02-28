import React from 'react';
import { connect } from 'react-redux';

import actionGenerator from '../../redux/actions';
import { actions, pages } from '../../redux/constants';
import Login from '../login';

class App extends React.Component {
  static mapStateToProps = state => ({
    page: state.navigation.page,
    questions: state.app.questions,
  });

  static mapDispatchToProps = dispatch => ({
    onLogin: (userName) => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          userName,
        }),
        headers,
      })
        .then(response => response.text())
        .then(jsonString => JSON.parse(jsonString))
        .then((body) => {
          if (body.statusCode === 200) {
            dispatch(actionGenerator(actions.SWITCH_PAGE, pages.QUIZ));
          }
        });
    },
  })

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    };
  }

  renderCurrentPage = () => {
    switch (this.props.page) {
      case pages.LOGIN:
        return (
          <Login
            userNameInput={this.state.userName}
            onUserNameChanged={value => this.setState(prevState => ({
              ...prevState,
              userName: value,
            }))}
            onSubmit={() => this.props.onLogin(this.state.userName)}
          />);
      case pages.QUIZ:
        return (
          <div>QUIZ</div>
        );
      case pages.LEADER_BOARD:
        return (<div />);
      default:
        return (<div>Quizzy Web!</div>);
    }
  }

  render = () => this.renderCurrentPage();
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';

import actionGenerator from '../../redux/actions';
import { actions, pages } from '../../redux/constants';
import loadQuestions from '../../lib/load-questions';

import Login from '../login';
import Quiz from '../quiz';
import LeaderBoard from '../leader-board';

class App extends React.Component {
  static mapStateToProps = state => ({
    page: state.navigation.page,
    questions: state.app.questions,
  });

  static mapDispatchToProps = dispatch => ({
    onLogin: (userName, context) => {
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
            return loadQuestions(userName);
          }
          return [];
        })
        .then((questions) => {
          const answered = questions.filter(q => q.selectedAnswer !== undefined);
          context.setState({
            ...context.state,
            calculateEnabled: answered.length === questions.length,
            answered: answered.map(a => a.id),
          }, () => {
            dispatch(actionGenerator(actions.SET_QUESTIONS, questions));
          });
        });
    },
    onOptionClick: (questionId, selectedAnswer, context) => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      fetch('/api/answers', {
        method: 'POST',
        body: JSON.stringify({
          userName: context.state.userName,
          questionId,
          selectedAnswer,
        }),
        headers,
      })
        .then(response => response.text())
        .then(jsonString => JSON.parse(jsonString))
        .then((body) => {
          if (body.statusCode === 200 &&
            context.state.answered.findIndex(p => p === questionId) === -1) {
            const answered = [...context.state.answered, questionId];
            const calculateEnabled =
              (answered.length === context.props.questions.length);
            context.setState(prevState => ({
              ...prevState,
              answered,
              calculateEnabled,
            }));
          }
        });
    },
    onCalculateButtonClick: () => {
      dispatch(actionGenerator(actions.SWITCH_PAGE, pages.LEADER_BOARD));
    },
    onPlayAgainButtonClick: (context) => {
      dispatch(actionGenerator(actions.SWITCH_PAGE, pages.LOGIN));
      context.setState({
        userName: '',
        answered: [],
        calculateEnabled: false,
      });
    },
  })

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      answered: [],
      calculateEnabled: false,
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
            onSubmit={() => this.props.onLogin(this.state.userName, this)}
          />);
      case pages.QUIZ:
        return (
          <Quiz
            questions={this.props.questions}
            onOptionClick={(questionId, selectedAnswer) =>
              this.props.onOptionClick(questionId, selectedAnswer, this)}
            calculateEnabled={this.state.calculateEnabled}
            onCalculateButtonClick={() => this.props.onCalculateButtonClick()}
          />
        );
      case pages.LEADER_BOARD:
        return (
          <LeaderBoard
            userName={this.state.userName}
            onPlayAgainButtonClick={() => this.props.onPlayAgainButtonClick(this)}
          />);
      default:
        return (<div>Quizzy Web!</div>);
    }
  }

  render = () => this.renderCurrentPage();
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App);

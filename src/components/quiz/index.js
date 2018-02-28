import React from 'react';

import Question from '../question';
import TitleBar from '../title-bar';

import * as styles from './quiz.style';

const Quiz = props => (
  <div>
    <TitleBar
      brand="Quizzy"
      message={`Hello ${props.userName}`}
    />
    <div style={styles.questions}>
      {props.questions.map((question, index) => (
        <Question
          question={question}
          number={index + 1}
          onOptionClick={(questionId, selectedAnswer) =>
            props.onOptionClick(questionId, selectedAnswer)}
        />
      ))}
    </div>
    <button
      disabled={!props.calculateEnabled}
      onClick={() => props.onCalculateButtonClick()}
    >Calculate
    </button>
  </div>
);

export default Quiz;

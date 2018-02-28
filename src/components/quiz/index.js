import React from 'react';

import Question from '../question';
import TitleBar from '../title-bar';

const Quiz = props => (
  <div>
    <TitleBar
      brand="Quizzy"
      message={`Hello ${props.userName}`}
    />
    {props.questions.map((question, index) => (
      <Question
        question={question}
        number={index + 1}
        onOptionClick={(questionId, selectedAnswer) =>
          props.onOptionClick(questionId, selectedAnswer)}
      />
    ))}
    <button
      disabled={!props.calculateEnabled}
      onClick={() => props.onCalculateButtonClick()}
    >Calculate
    </button>
  </div>
);

export default Quiz;

import React from 'react';
import uuid from 'uuid/v1';

import Question from '../question';

const Quiz = props => (
  <div>
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

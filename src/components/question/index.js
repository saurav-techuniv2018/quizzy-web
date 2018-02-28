import React from 'react';
import uuid from 'uuid/v1';

const Question = props => (
  <div>
    <div>{`Question ${props.number}`}</div>
    <div>{props.question.question}</div>
    {props.question.options.map(option => (
      <div>
        <input
          type="radio"
          name={`question-${props.number}`}
          defaultChecked={option === props.question.selectedAnswer}
          onClick={() => props.onOptionClick(props.question.id, option)}
        /> <span>{option}</span>
      </div>
    ))}
  </div>
);

export default Question;

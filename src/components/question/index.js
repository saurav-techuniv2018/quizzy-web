import React from 'react';

const Question = props => (
  <div>
    <div>{`Question ${props.number}`}</div>
    <div>{props.question.question}</div>
    {props.question.options.map(option => (
      <div key={`${props.question.id}`}>
        <input
          type="radio"
          name={`question-${props.number}`}
          value={option}
          onClick={() => { props.onOptionClick(props.question.id, option); }}
        /> <span>{option}</span>
      </div>
    ))}
  </div>
);

export default Question;

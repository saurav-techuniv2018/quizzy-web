import React from 'react';

import * as styles from './question.style';
import './question.css';

const Question = props => (
  <div style={styles.container}>
    <div style={styles.questionNumber}>{`Question ${props.number}`}</div>
    <div style={styles.question}>{props.question.question}</div>
    <div style={styles.radioGroup}>
      {props.question.options.map(option => (
        <div>
          <input
            className="Question-choice"
            style={styles.radioButton}
            type="radio"
            name={`question-${props.number}`}
            defaultChecked={option === props.question.selectedAnswer}
            onClick={() => props.onOptionClick(props.question.id, option)}
          /> <span>{option}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Question;

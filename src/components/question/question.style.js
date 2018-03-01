import { fonts, colors } from '../../lib/global.style';

export const container = {
  border: '2px solid black',
  marginTop: '32px',
  ...fonts,
};

export const questionNumber = {
  padding: '8px 16px',
  borderBottom: '2px solid black',
};

export const question = {
  backgroundColor: colors.main,
  textAlign: 'center',
  borderBottom: questionNumber.borderBottom,
  padding: questionNumber.padding,
};

export const radioGroup = {
  padding: questionNumber.padding,
};

export const radioButton = {
  border: '2px solid black',
  ...fonts,
};


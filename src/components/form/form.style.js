import { fonts, colors, quizButton } from '../../lib/global.style';

export const container = {
  ...fonts,
  backgroundColor: colors.secondary,
  padding: '16px',
};

export const loginSection = {
  display: 'flex',
  flexDirection: 'column',
};

export const label = {
  paddingTop: '16px',
};

export const userName = {
  border: '2px solid black',
  fontSize: '24px',
  ...fonts,
};

export const loginButton = {
  ...quizButton,
};


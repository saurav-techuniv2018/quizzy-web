import { fonts, colors, quizButton } from '../../lib/global.style';

export const container = {
  display: 'flex',
  flexDirection: 'column',
};

export const yourScore = {
  color: colors.highlight,
  ...fonts,
  fontsize: '32px',
  padding: '16px',
};

export const scoreContainer = {
  padding: '16px',
};

export const scoreNumerator = {
  ...fonts,
  fontStretch: 'regular',
  fontSize: '64px',
  fontWeight: '100',
};

export const scoreDivider = {
  ...fonts,
  fontSize: '32px',
};

export const scoreDenominator = {
  ...fonts,
  fontSize: '32px',
};

export const leaderBoardContainer = {
  display: 'flex',
  flexDirection: 'column',
  color: 'black',
};

export const topUser = {
  display: 'flex',
  backgroundColor: colors.hightlight2,
  border: '2px solid black',
  margin: '16px',
  padding: '8px',
};

export const topUserScore = {
  alignSelf: 'flex-end',
  flexGrow: 1,
  textAlign: 'end',
  fontSize: '32px',
  color: 'white',
  ...fonts,
};

export const playAgainButton = {
  ...fonts,
  backgroundColor: colors.secondary,
  fontSize: '24px',
  alignSelf: 'center',
  ...quizButton,
};


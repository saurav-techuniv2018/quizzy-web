import { fonts, colors } from '../../lib/global.style';

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
  width: 'auto',
  ...fonts,
  fontSize: '20px',
  backgroundColor: colors.secondary,
  marginTop: '32px',
  border: '2px solid black',
  borderRadius: '8px',
  alignSelf: 'center',
  padding: '8px 48px',
};


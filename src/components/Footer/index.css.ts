import { vars } from '@/styles/global.css';

import { style } from '@vanilla-extract/css';

export const footer = style({
  background: '#f3f3f3',
  marginTop: '3rem',
  padding: '1rem 0',
  position: 'absolute',
  bottom: 0,
  width: '100%',
});

export const footerContainer = style({
  maxWidth: 1140,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
});

export const footerLogo = style({
  color: vars.colors.primary,
  fontWeight: vars.font.weight.bold,
  ':hover': {
    color: '#3D8B3C',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

export const footerSpan = style({
  verticalAlign: 'middle',
  marginLeft: 10,
  fontSize: '0.8rem',
  color: '#bbb',
  fontWeight: 300,
});

export const footerTag = style({
  color: vars.colors.primary,
  fontWeight: vars.font.weight.semiThin,
  fontSize: vars.font.size.little,
});

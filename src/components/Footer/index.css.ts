import { vars } from '@/styles/global.css';

import { style } from '@vanilla-extract/css';

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  margin: '0 auto',
  padding: '1rem 0',
  bottom: '0',
  background: '#f3f3f3',
  marginTop: '3rem',
  position: 'absolute',
});

export const footerContainer = style({
  maxWidth: '1140px',
});

export const footerLogo = style({
  color: vars.colors.primary,
});

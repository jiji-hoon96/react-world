import { style } from '@vanilla-extract/css';

export const homeLayout = style({
  marginTop: '1.5rem',
  maxWidth: 1140,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
  display: 'flex',
});

export const homeLeftLayout = style({
  width: '70%',
});

export const homeRightLayout = style({
  width: '30%',
});

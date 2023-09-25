import { vars } from '@/styles/global.css';

import { style } from '@vanilla-extract/css';

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 1140,
  margin: '0 auto',
  padding: '8px 16px',
});

export const navLogo = style({
  color: vars.colors.primary,
});

export const navLeftArea = style({
  color: vars.colors.primary,
  fontSize: 24,
  fontWeight: 700,
});

export const navRightArea = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const navSelectLink = style({
  color: vars.colors.black,
});

export const navLink = style({
  color: vars.colors.gray,
  ':hover': {
    color: vars.colors.black,
  },
});

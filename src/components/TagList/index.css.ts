import { style } from '@vanilla-extract/css';

export const TagDiv = style({
  position: 'relative',
  minHeight: 1,
  paddingRight: 15,
  paddingLeft: 15,
  flex: '0 0 25%',
});

export const TagContainer = style({
  padding: 10,
  background: '#f3f3f3',
  borderRadius: 4,
});

export const TagTitle = style({
  marginBottom: '0.2rem',
});

export const TagItem = style({
  color: ' #fff !important',
  fontSize: '0.8rem',
  paddingTop: '0.1rem',
  paddingBottom: ' 0.1rem',
  whiteSpace: 'nowrap',
  marginRight: '3px',
  marginBottom: ' 0.2rem',
  display: 'inline-block',
  backgroundColor: '#818a91',
  paddingRight: ' 0.6em',
  paddingLeft: '0.6em',
  borderRadius: '10rem',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#677076',
  },
});

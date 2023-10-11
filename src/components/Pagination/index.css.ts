import { style } from '@vanilla-extract/css';

export const PaginationUl = style({
  display: 'flex',
  paddingLeft: 0,
  marginTop: '1rem',
  marginBottom: '1rem',
  borderRadius: '0.25rem',
});

export const PaginationLink = style({
  zIndex: 2,

  cursor: 'pointer',

  borderColor: '#5CB85C',
  border: '1px solid #ddd',
  padding: '0.5rem 0.75rem',
  position: 'relative',
  float: 'left',
  ':first-child': {
    marginLeft: 0,
  },
  ':hover': {
    backgroundColor: '#5CB85C',
    color: '#fff',
  },
});

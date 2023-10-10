import { style } from '@vanilla-extract/css';

export const FeedContainer = style({
  borderTop: '1px solid rgba(0,0,0,0.1)',
  padding: '1.5rem 0',
});

export const FeedTitleContainer = style({
  margin: '0 0 1rem 0',
  display: 'block',
  position: 'relative',
  justifyContent: 'center',
  fontWeight: 300,
});

export const FeedImage = style({
  display: 'inline-block',
  height: 32,
  width: 32,
  borderRadius: 30,
});

export const FeedInfo = style({
  margin: '0 1.5rem 0 0.3rem',
  display: 'inline-block',
  verticalAlign: 'middle',
  lineHeight: '1rem',
});

export const FeedAuthor = style({
  color: '#5CB85C',
  textDecoration: 'none',
  fontWeight: 500,
});

export const FeedDate = style({
  color: '#bbb',
  fontSize: '0.8rem',
  display: 'block',
});

export const FeedTitleRightArea = style({
  float: 'right',
});

export const FeedFavBtn = style({
  padding: '0.25rem 0.5rem',
  fontSize: '0.875rem',
  borderRadius: '0.2rem',
  color: '#5CB85C',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  borderColor: '#5CB85C',
  display: 'inline-lock',
  fontWeight: 'normal',
  lineHeight: 1.25,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  cursor: 'pointer',
  userSelect: 'none',
  border: '1px solid #5CB85C',
  ':hover': {
    color: 'white',
    backgroundColor: '#5CB85C',
  },
});

export const FeedLink = style({
  cursor: 'pointer',
});

export const FeedTitle = style({
  fontWeight: '600 !important',
  fontSize: '1.5rem !important',
  marginBottom: 3,
});

export const FeedDescription = style({
  fontWeight: 300,
  fontSize: '1rem',
  color: '#999',
  marginBottom: 15,
  lineHeight: '1.3rem',
});

export const FeedExpand = style({
  maxWidth: '30%',
  fontSize: '0.8rem',
  fontWeight: 300,
  color: '#bbb',
  verticalAlign: 'middle',
});

export const FeedUl = style({
  float: 'right',
  maxWidth: '50%',
  verticalAlign: 'top',
  display: 'flex',
  cursor: 'pointer',
  marginTop: 0,
  marginBottom: '1rem',
});

export const FeedLi = style({
  fontWeight: 300,
  fontSize: '0.8rem !important',
  paddingTop: '0px !important',
  paddingBottom: '0px !important',
  border: '1px solid #ddd',
  color: '#aaa !important',
  background: 'none !important',
  marginRight: 3,
  marginBottom: '0.2rem',
  paddingRight: ' 0.6em',
  paddingLeft: ' 0.6em',
  borderRadius: ' 10rem',
});

import {Dimensions} from 'react-native';

export const COLORS = {
  PRIMARY_RED: '#FF5D51',
  BACKGROUND_RED: '#FEDCD9',
  SECONDARY_RED: '#FFDDDD',

  WHITE: '#FFFFFF',

  BACKGROUND_BLACK: '#CCCCCC',
  PRIMARY_BLACK: '#28272F',
  SECONDARY_BLACK: '#888888',
  LIGHT_BLACK: '#E5E5E5',
  DARK_BLACK: '#000000',
  BORDER_COLOR: '#DBDBDB',
};

export const SERIF_BASE = {
  FONT_MEDIUM: 'TiemposHeadline-Medium',
};

export const SANS_BASE = {
  FONT_BOLD: 'MierB-Bold',
  FONT_REGULAR: 'MierB-Regular',
  FONT_ITALIC: 'MierB-Italic',
};

export const DEVICE = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

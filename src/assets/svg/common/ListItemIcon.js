import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
const ListItemIcon = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
      <Rect width="16" height="16" fill="none" fill-opacity="0.01" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.10641 15.3957C3.91115 15.2005 3.91115 14.8839 4.10641 14.6886L10.8239 7.97109L4.10641 1.25358C3.91115 1.05832 3.91115 0.741733 4.10641 0.546471C4.30167 0.351209 4.61825 0.351209 4.81351 0.546471L11.8846 7.61754C12.0798 7.8128 12.0798 8.12938 11.8846 8.32465L4.81351 15.3957C4.61825 15.591 4.30167 15.591 4.10641 15.3957Z" fill={props.fill} />
    </Svg>
  )
}

export default ListItemIcon;
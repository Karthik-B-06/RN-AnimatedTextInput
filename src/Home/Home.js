import React from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ListItemIcon from '../assets/svg/common/ListItemIcon';
import { BACKGROUND_BLACK, BORDER_COLOR, WHITE } from '../helpers/styledTheme';

export const Home = (props) => {
  const screens = [
    {
      title: 'Register',
      routeName: 'Register',
      id: 1
    },
  ]
  const _keyExtractor = item => item.id.toString();
  const _renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight underlayColor={BACKGROUND_BLACK} onPress={() => props.navigation.navigate(item.routeName)}>
        <View style={HomeScreenStyles.listItemView}>
          <Text>{item.title}</Text>
          <ListItemIcon fill='#96B4C8' />
        </View>
      </TouchableHighlight>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: WHITE }}>
      <FlatList
        style={HomeScreenStyles.list}
        data={screens}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
      />
    </View>
  )
}


const HomeScreenStyles = StyleSheet.create({
  listItemView: {
    padding: 12,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  list: {
    paddingTop: DeviceInfo.hasNotch ? getStatusBarHeight() + 20 : 30,
  }
})
import React, { useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useFormData } from '../helpers/formData';
import { WHITE } from '../helpers/styledTheme';
import FormField from './components/FormField';
const nameViewHeader = new Animated.Value(40);

export const RegisterForm = (props) => {
  const [
    handleChange,
    handleSubmit,
    values,
  ] = useFormData({
    name: '',
    email: '',
    password: ''
  });
  const [nameTapped, setNameTapped] = useState(false);
  const [nameEntered, setNameEntered] = useState(false);
  const _onBlur = () => {
    setNameTapped(false);
    if (values && values.name && values.name.length > 0) {
      setNameEntered(true);
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: WHITE }}>
      <View style={RegisterFormStyles.container}>
        <TouchableHighlight underlayColor={WHITE} onPress={() => setNameTapped(!nameTapped)}>
          <FormField
            _onBlur={_onBlur}
            nameTapped={nameTapped}
            nameEntered={nameEntered}
            nameViewHeader={nameViewHeader}
            handleChange={handleChange}
            value={values.name}
            defaultValue={values.name}
            textInputId='name'
          />
        </TouchableHighlight>
      </View>
    </View>
  )
}


const RegisterFormStyles = StyleSheet.create({
  container: {
    paddingTop: DeviceInfo.hasNotch ? getStatusBarHeight() + 20 : 30,
    marginLeft: 20,
    marginRight: 20
  },
})
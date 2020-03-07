import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFormData } from '../helpers/formData';
import { COLORS, DEVICE } from '../helpers/styledTheme';
import FormField from './components/FormField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <KeyboardAwareScrollView>
        <View style={RegisterFormStyles.formContainer}>
          <View style={{
            margin: 5
          }}>
            <FormField
              handleChange={handleChange}
              value={values.name}
              defaultValue={values.name}
              textInputId='name'
              label='Name'
            />
          </View>
          <View style={{
            margin: 5
          }}>
            <FormField
              handleChange={handleChange}
              value={values.email}
              defaultValue={values.email}
              textInputId='email'
              label='Email'
              textInputProps={{
                textContentType: 'emailAddress',
                autoCapitalize: 'none'
              }}
            />
          </View>
          <View style={{
            margin: 5
          }}>
            <FormField
              handleChange={handleChange}
              value={values.password}
              defaultValue={values.password}
              textInputId='password'
              label='Password'
              textInputProps={{
                secureTextEntry: true,
                textContentType: 'emailAddress'
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}


const RegisterFormStyles = StyleSheet.create({
  formContainer: {
    // paddingTop: DeviceInfo.hasNotch ? getStatusBarHeight() + 20 : 30,
    paddingLeft: 20,
    paddingRight: 20,
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    alignContent: 'center',
    height: DEVICE.height,
  },
})
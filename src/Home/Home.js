import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FormField from '../components/FormField';
import {COLORS} from '../helpers/styledTheme';

export const Home = props => {
  const [inputValue, setInputValue] = useState('');
  const onHandleChange = (key, value) => {
    setInputValue(value);
  };
  return (
    <SafeAreaView style={HomeScreenStyles.container}>
      <View style={HomeScreenStyles.formFieldWrapper}>
        <FormField
          handleChange={onHandleChange}
          value={inputValue}
          defaultValue={inputValue}
          textInputId="First name"
          label="First Name"
          textInputProps={{
            returnKeyType: 'done',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formFieldWrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

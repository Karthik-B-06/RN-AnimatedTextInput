import isEqual from 'lodash/isEqual';
import React from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';
import { BORDER_COLOR } from '../../helpers/styledTheme';

const TextInputWrapper = ({
  _onBlur,
  nameTapped,
  handleChange,
  textInputId,
  placeholder,
  value,
  defaultValue,
  textInputOpacity
}) => {
  return (
    <Animated.View style={[
      { opacity: textInputOpacity }
    ]}>
      <TextInput
        defaultValue={defaultValue || ''}
        onBlur={_onBlur}
        autoFocus={nameTapped}
        onChange={(event) => handleChange(textInputId, event.nativeEvent.text)}
        style={TextInputWrapperStyles.textInput}
        placeholder={placeholder} />
    </Animated.View>
  )
}

const TextInputWrapperStyles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    backgroundColor: '#FAFAFA',
    marginTop: 10,
    padding: 10,
    height: 40,
    borderRadius: 12,
  }
})

const arePropsEqual = (prevProps, nextProps) => {
  const hasValueChanged = isEqual(prevProps.value, nextProps.value);
  return hasValueChanged;
}

export default React.memo(TextInputWrapper, arePropsEqual);
import isEqual from 'lodash/isEqual';
import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { BORDER_COLOR, WHITE } from '../../helpers/styledTheme';
import TextInputWrapper from './TextInputWrapper';
import PropTypes from 'prop-types';
const textInputOpacity = new Animated.Value(0);
const FormField = ({
  _onBlur,
  _onFocus,
  nameTapped,
  handleChange,
  nameViewHeader,
  value,
  nameEntered,
  defaultValue,
  textInputId,
  editValue
}) => {
  useEffect(() => {
    if (nameTapped) {
      Animated.timing(nameViewHeader, {
        toValue: 90,
        duration: 300
      }).start()
      Animated.timing(textInputOpacity, {
        toValue: 1,
        duration: 300
      }).start()
    }
    else if (!nameTapped && !nameEntered) {
      Animated.timing(nameViewHeader, {
        toValue: 40,
        duration: 300
      }).start()
      Animated.timing(textInputOpacity, {
        toValue: 0,
        duration: 300
      }).start()
    } else if (nameEntered) {
      Animated.timing(nameViewHeader, {
        toValue: 70,
        duration: 300
      }).start()
    }
  }, [nameTapped, nameEntered]);
  return (
    <Animated.View style={[
      FormFieldStyles.formInputView,
      {
        height: nameViewHeader
      }]}>
      <Text>Name</Text>
      <TextInputWrapper
        _onBlur={_onBlur}
        textInputId={textInputId}
        handleChange={handleChange}
        nameTapped={nameTapped}
        nameEntered={nameEntered}
        editValue={editValue}
        placeholder='Enter name'
        value={value}
        defaultValue={defaultValue}
        textInputOpacity={textInputOpacity}
      />
    </Animated.View>
  )
}
const FormFieldStyles = StyleSheet.create({
  formInputView: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    padding: 10,
    borderRadius: 10,
  },
  textValue: {
    backgroundColor: WHITE,
    padding: 10,
    paddingBottom: 0,
    paddingLeft: 0,
    height: 40,
    borderRadius: 12,
  }
});

FormField.propTypes = {
  _onBlur: PropTypes.func,
  nameTapped: PropTypes.bool,
  handleChange: PropTypes.func,
  nameViewHeader: PropTypes.any,
  value: PropTypes.string,
  nameEntered: PropTypes.bool,
  defaultValue: PropTypes.string,
  textInputId: PropTypes.string
}

FormField.defaultValue = {
  nameTapped: false,
  nameViewHeader: new Animated.Value(40),
  value: '',
  nameEntered: false,
  defaultValue: '',
  textInputId: '',
  _onBlur: () => { },
  handleChange: () => { },
}



const arePropsEqual = (prevProps, nextProps) => {
  const hasNameTappedChanged = isEqual(prevProps.nameTapped, nextProps.nameTapped);
  const hasNameEntered = isEqual(prevProps.nameEntered, nextProps.nameEntered);
  const hasValueChanged = isEqual(prevProps.value, nextProps.value);
  const hasEditValueChanged = isEqual(prevProps.editValue, nextProps.editValue)
  return hasNameTappedChanged && hasValueChanged && hasNameEntered && hasEditValueChanged;
}

export default React.memo(FormField, arePropsEqual);
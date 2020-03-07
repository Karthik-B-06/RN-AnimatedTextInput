import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { COLORS, SANS_BASE } from '../../helpers/styledTheme';
import TextInputWrapper from './TextInputWrapper';


const FormField = ({
  handleChange,
  value,
  defaultValue,
  textInputId,
  label,
  textInputProps
}) => {
  const [textInputOpacity, setTextInputOpacity] = useState(new Animated.Value(0));
  const [nameViewHeader, setNameViewHeader] = useState(new Animated.Value(60));
  const [scaleFormField, setScaleFormField] = useState(new Animated.Value(0.85));
  const [nameTapped, setNameTapped] = useState(false);
  const [nameEntered, setNameEntered] = useState(false);
  const [editValue, setEditValue] = useState(false);
  const _onBlur = () => {
    setNameTapped(false);
  }
  const _onFocus = () => {

  }
  const _onTap = () => {
    setNameTapped(!nameTapped);
  }
  useEffect(() => {
    if (nameTapped) {
      setEditValue(true);
      Animated.parallel([
        Animated.stagger(100, [
          Animated.timing(nameViewHeader, {
            toValue: 95,
            duration: 300
          }),
          Animated.timing(textInputOpacity, {
            toValue: 1,
            duration: 300
          })
        ]),
        Animated.spring(scaleFormField, {
          toValue: 1,
          stiffness: 120,
          damping: 20,
          mass: 1,
          // useNativeDriver: true
        })
      ]).start();
    } else {
      setEditValue(false);
      if (value && value.length > 0) {
        setNameEntered(true);
        Animated.parallel([
          Animated.timing(nameViewHeader, {
            toValue: 70,
            duration: 300
          }),
          Animated.spring(scaleFormField, {
            toValue: 0.95,
            stiffness: 120,
            damping: 20,
            mass: 1,
          })
        ]).start()
      } else {
        setNameEntered(true);
        Animated.parallel([
          Animated.timing(nameViewHeader, {
            toValue: 40,
            duration: 300
          }),
          Animated.timing(textInputOpacity, {
            toValue: 0,
            duration: 300
          }),
          Animated.spring(scaleFormField, {
            toValue: 0.95,
            stiffness: 120,
            damping: 20,
            mass: 1,
          })
        ]).start()
      }
    }
  }, [nameTapped]);
  return (
    <TouchableHighlight underlayColor={COLORS.WHITE} onPress={_onTap}>
      <Animated.View style={[
        FormFieldStyles.formInputView,
        {
          height: nameViewHeader
        },

        {
          transform: [
            {
              scale: scaleFormField
            }
          ]
        }
      ]}>
        <Text style={FormFieldStyles.formLabel}>{label}</Text>
        <TextInputWrapper
          _onBlur={_onBlur}
          textInputId={textInputId}
          handleChange={handleChange}
          nameTapped={nameTapped}
          nameEntered={nameEntered}
          editValue={editValue}
          placeholder={`Enter ${textInputId}`}
          value={value}
          defaultValue={defaultValue}
          textInputOpacity={textInputOpacity}
          textInputProps={textInputProps}
        />
      </Animated.View>
    </TouchableHighlight>
  )
}
const FormFieldStyles = StyleSheet.create({
  formInputView: {
    borderWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
    padding: 12,
    borderRadius: 10,
  },
  textValue: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    paddingBottom: 0,
    paddingLeft: 0,
    height: 40,
    borderRadius: 12,
  },
  formLabel: {
    fontFamily: SANS_BASE.FONT_BOLD,
    fontSize: 17,
    lineHeight: 17,
    color: COLORS.PRIMARY_BLACK,
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
  const hasValueChanged = isEqual(prevProps.value, nextProps.value);
  return hasValueChanged;
}

export default React.memo(FormField, arePropsEqual);
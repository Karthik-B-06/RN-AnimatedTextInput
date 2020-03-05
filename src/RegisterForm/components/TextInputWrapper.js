import isEqual from 'lodash/isEqual';
import React, { useEffect } from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';
import { BORDER_COLOR, WHITE } from '../../helpers/styledTheme';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const textInputPosition = new Animated.ValueXY({ x: 0, y: 0 })

const TextInputWrapper = ({
  _onBlur,
  _onFocus,
  nameTapped,
  handleChange,
  textInputId,
  placeholder,
  value,
  defaultValue,
  textInputOpacity,
  nameEntered,
  editValue
}) => {
  const backgroundInterpolate = textInputPosition.x.interpolate({
    inputRange: [-10, 0],
    outputRange: [WHITE, '#FAFAFA'],
    extrapolate: 'clamp'
  })
  useEffect(() => {
    if (nameEntered) {
      Animated.spring(textInputPosition, {
        toValue: { x: -10, y: -10 },
        damping: 20,
        mass: 1,
        stiffness: 120
      }).start()
    }
    if (editValue) {
      Animated.spring(textInputPosition, {
        toValue: { x: 0, y: 0 },
        damping: 20,
        mass: 1,
        stiffness: 120
      }).start()
    }
  }, [nameEntered, editValue])
  return (
    <Animated.View style={[
      {
        opacity: textInputOpacity
      },
      {
        transform: [
          {
            translateX: textInputPosition.x
          },
          {
            translateY: textInputPosition.y
          }
        ]
      }
    ]}>
      <AnimatedTextInput
        defaultValue={defaultValue || ''}
        onBlur={_onBlur}
        editable={editValue}
        onFocus={_onFocus}
        autoFocus={nameTapped}
        onChange={(event) => handleChange(textInputId, event.nativeEvent.text)}
        style={[
          TextInputWrapperStyles.textInput,
          {
            backgroundColor: backgroundInterpolate
          }
        ]}
        placeholder={placeholder} />
    </Animated.View>
  )
}

const TextInputWrapperStyles = StyleSheet.create({
  textInput: {
    backgroundColor: '#FAFAFA',
    marginTop: 10,
    padding: 10,
    height: 40,
    borderRadius: 12,
  }
})

const arePropsEqual = (prevProps, nextProps) => {
  const hasNameTappedChanged = isEqual(prevProps.nameTapped, nextProps.nameTapped);
  const hasValueChanged = isEqual(prevProps.value, nextProps.value);
  const hasNameEntered = isEqual(prevProps.nameEntered, nextProps.nameEntered);
  const hasEditValueChanged = isEqual(prevProps.editValue, nextProps.editValue)
  return hasValueChanged && hasNameEntered && hasEditValueChanged && hasNameTappedChanged;
}

export default React.memo(TextInputWrapper, arePropsEqual);
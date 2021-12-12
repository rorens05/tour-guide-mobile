import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, View} from 'react-native';
import {Icon, Input, Text} from '@ui-kitten/components';

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

export const FormInput = ({
  onChangeText = () => {},
  value,
  type,
  placeholder,
  label,
  caption,
  style,
  icon,
  keyboardType,
}) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>{caption}</Text>
      </View>
    );
  };

  const renderLeftIcon = props => <Icon {...props} name={icon} />;

  return (
    <Input
      keyboardType={keyboardType}
      style={[{marginBottom: 0}, {...style}]}
      value={value}
      label={label}
      placeholder={placeholder}
      caption={renderCaption}
      accessoryRight={type == 'password' ? renderIcon : null}
      accessoryLeft={icon ? renderLeftIcon : null}
      secureTextEntry={type == 'password' ? secureTextEntry : null}
      onChangeText={nextValue => onChangeText(nextValue)}
    />
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
});

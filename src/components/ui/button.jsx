import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import themeColors from '../../theme/themeColors';

const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return themeColors.GREEN;
      case 'warning':
        return themeColors.LL;
      case 'danger':
        return themeColors.RED;
      default:
        return themeColors.PINK;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingVertical: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

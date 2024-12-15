import {Add} from 'iconsax-react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import themeColors from '../../theme/themeColors';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="48" color="#FFE3E3" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    position: 'absolute',
    backgroundColor: themeColors.RED,
    borderRadius: 40,
    bottom: 50,
    right: 20,
  },
});

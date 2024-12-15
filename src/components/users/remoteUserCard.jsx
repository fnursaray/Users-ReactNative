import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import {ArrowRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import themeColors from '../../theme/themeColors';
import {USERDETAIL} from '../../utils/routes';

const RemoteUserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAIL, {user: user})}
      style={styles.container}>
      <View>
        {user?.picture?.medium ? (
          <Image
            source={{uri: user?.picture?.medium}}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              resizeMode: 'contain',
            }}
          />
        ) : (
          <View style={styles.content}>
            <Text style={styles.identifyBlock}>
              {getInitialNameSurname(user?.name?.first, user?.name?.last)}
            </Text>
          </View>
        )}
      </View>
      <View style={{padding: 10, flex: 1}}>
        <Text style={styles.identify}>
          {compareName(user?.name?.first, user?.name?.last)}
        </Text>
        <Text style={styles.identify}>{user.email}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ArrowRight size={24} color={themeColors.RED} />
      </View>
    </Pressable>
  );
};

export default RemoteUserCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themeColors.WHITE,
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  content: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getRandomColor(),
  },
  identifyBlock: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  identify: {fontSize: 18, fontWeight: '500'},
});

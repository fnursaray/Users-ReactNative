import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import {ArrowRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import themeColors from '../../theme/themeColors';
import {USERDETAIL} from '../../utils/routes';

const UserCard = ({user}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAIL, {user: user})}
      style={styles.container}>
      <View>
        <View style={[styles.content, {backgroundColor: getRandomColor()}]}>
          <Text style={styles.identifyBlock}>
            {getInitialNameSurname(user.name, user.surname)}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flex: 1}}>
        <Text style={styles.identify}>
          {compareName(user.name, user.surname)}
        </Text>
        <Text style={styles.identify}>{user.email}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ArrowRight size={24} color={themeColors.RED} />
      </View>
    </Pressable>
  );
};

export default UserCard;

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
  identify: {fontSize: 18, fontWeight: 500},
});

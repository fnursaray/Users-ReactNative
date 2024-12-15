import {ScrollView, StyleSheet, Text, View} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import themeColors from '../../theme/themeColors';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import {useDispatch, useSelector} from 'react-redux';
import {USERS, USERUPDATE} from '../../utils/routes';
import {Calendar, Call, Man, Sms, Woman} from 'iconsax-react-native';
import Button from '../../components/ui/button';
import {deleteUser} from '../../store/slice/userSlice';
import {useNavigation} from '@react-navigation/native';

const UserDetail = ({route}) => {
  const {user} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {users} = useSelector(state => state.users);

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
            borderBottomWidth: 1,
            borderColor: themeColors.BLACK,
          }}>
          <View style={[styles.content, {backgroundColor: getRandomColor()}]}>
            <Text style={styles.identifyBlock}>
              {getInitialNameSurname(user.name, user.surname)}
            </Text>
          </View>
          <Text style={styles.identify}>
            {compareName(user.name, user.surname)}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Sms />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Call />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.phoneNumber}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Calendar />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.age}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            {user.gender == 'Erkek' ? <Man /> : <Woman />}
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.gender}
            </Text>
          </View>
          <View style={{marginTop: 50}}>
            <Button
              title="Update"
              status="warning"
              onPress={() => {
                navigation.navigate(USERUPDATE, user);
              }}
            />
            <Button
              title="Delete"
              status="danger"
              onPress={() => {
                dispatch(deleteUser(user.id));
                navigation.navigate(USERS);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderRadius: 100,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  identifyBlock: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  identify: {fontSize: 18, fontWeight: 500, marginTop: 10},
});

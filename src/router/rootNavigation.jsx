import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import {
  ADDNEWUSER,
  REMOTEUSERS,
  USERDETAIL,
  USERS,
  USERUPDATE,
} from '../utils/routes';
import AddNewUser from '../screens/users/addNewUser';
import UserDetail from '../screens/users/userDetail';
import RemoteUsers from '../screens/users/remoteUsers';
import UserUpdate from '../screens/users/userUpdate';
import themeColors from '../theme/themeColors';
import {GlobalSearch} from 'iconsax-react-native';
import {Pressable, View} from 'react-native';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName={USERS}>
      <Stack.Screen name={REMOTEUSERS} component={RemoteUsers} />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerLeft: () => (
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => navigation.navigate(REMOTEUSERS)}
                style={{marginLeft: 15}}>
                <GlobalSearch size="32" color={themeColors.BLACK} />
              </Pressable>
            </View>
          ),
        })}
        name={USERS}
        component={Users}
      />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
      <Stack.Screen name={USERUPDATE} component={UserUpdate} />
    </Stack.Navigator>
  );
}

export default RootNavigation;

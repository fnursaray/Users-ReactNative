import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';
import {useEffect} from 'react';
import RemoteUserCard from '../../components/users/remoteUserCard';
import {getUsers} from '../../store/actions/userActions';
import themeColors from '../../theme/themeColors';

const RemoteUsers = ({navigation}) => {
  const dispatch = useDispatch();
  const {remoteUsers, pending} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers({results: 10}));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <ActivityIndicator size={'large'} color={themeColors.BLACK} />
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Henüz bir kullanıcı eklenmedi.
            </Text>
          }
          keyExtractor={item => item.email}
          data={remoteUsers || []}
          renderItem={({item}) => <RemoteUserCard user={item} />}
        />
      )}
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};

export default RemoteUsers;

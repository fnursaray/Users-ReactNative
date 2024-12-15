import {ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {Formik} from 'formik';
import {newUserSchema} from '../../utils/validationSchemas';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../store/slice/userSlice';
import {USERS} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const UserUpdate = ({route}) => {
  const user = route?.params || {};
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{
        id: user?.id || Date.now(),
        name: user?.name || '',
        surname: user?.surname || '',
        phoneNumber: user?.phoneNumber || '',
        email: user?.email || '',
        gender: user?.gender || '',
        age: user?.age || '',
      }}
      validationSchema={newUserSchema}
      onSubmit={values => {
        dispatch(updateUser(values));
        navigation.navigate(USERS);
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <ScrollView style={defaultScreenStyle.container}>
          <Input
            error={errors.name}
            value={values.name}
            title="Name"
            placeholder="Set Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
          />
          <Input
            error={errors.surname}
            value={values.surname}
            title="Surname"
            placeholder="Set Surname"
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')}
          />
          <Input
            error={errors.age}
            keyboardType="number-pad"
            value={values.age}
            title="Age"
            placeholder="Set Age"
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
          />
          <Input
            error={errors.phoneNumber}
            value={values.phoneNumber}
            keyboardType="phone-pad"
            title="Phone Number"
            placeholder="Set Phone Number"
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
          />
          <Input
            error={errors.email}
            value={values.email}
            title="E-mail"
            placeholder="Set E-mail"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          <Input
            error={errors.gender}
            value={values.gender}
            title="Gender"
            placeholder="Set Gender"
            onChangeText={handleChange('gender')}
            onBlur={handleBlur('gender')}
          />

          <Button onPress={handleSubmit} title="Update" status="warning" />
        </ScrollView>
      )}
    </Formik>
  );
};

export default UserUpdate;

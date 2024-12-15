import {ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {Formik} from 'formik';
import {newUserSchema} from '../../utils/validationSchemas';
import {useDispatch} from 'react-redux';
import {addNewUser} from '../../store/slice/userSlice';
import {USERS} from '../../utils/routes';
const AddNewUser = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        id: Date.now(),
        name: 'Nur',
        surname: 'S',
        age: '25',
        phoneNumber: '00000000000',
        email: 'mail@gmail.com',
        gender: 'Kadın',
      }}
      validationSchema={newUserSchema}
      onSubmit={values => dispatch(addNewUser(values))}>
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

          <Button
            onPress={() => {
              handleSubmit();
              navigation.navigate(USERS);
            }}
            title="Save"
            status="success"
          />
        </ScrollView>
      )}
    </Formik>
  );
};

export default AddNewUser;

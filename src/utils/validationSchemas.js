import * as Yup from 'yup';

const newUserSchema = Yup.object().shape({
  name: Yup.string().required('Required Field'),
  surname: Yup.string().required('Required Field'),
  phoneNumber: Yup.string()
    .max(20, 'MAX 20 ')
    .min(11, 'MIN 11')
    .required('Required Field'),
  email: Yup.string().email('Invalid email adress').required('Required Field'),
  age: Yup.number().min('18', 'Min 18').max('80', 'Max 80'),
  gender: Yup.string(),
});
export {newUserSchema};

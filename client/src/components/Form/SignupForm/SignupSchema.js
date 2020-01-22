import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .required('Required')
})

export default SignupSchema

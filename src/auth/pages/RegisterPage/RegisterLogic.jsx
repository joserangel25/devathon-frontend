import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerValidations } from '../../../validations/register.validtions';

export const RegisterLogic = () => {
  // validate the inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidations),
  });

  // the data is already validate
  const onSubmit = (data) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

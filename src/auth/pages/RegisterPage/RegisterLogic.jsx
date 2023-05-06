import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerValidations } from '../../../validations/register.validations';
import { submitRegister } from '../../../store/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const RegisterLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isCreated } = useSelector((state) => state.auth);

  const userCreated = () => {
    toast.success('Usuario Creado', { position: 'top-left', duration: 2000 });

    // redirect the user after the user have created
    setTimeout(() => {
      navigate('/auth/login');
    }, 2500);
  };

  useEffect(() => {
    if (isCreated) {
      userCreated();
    }
  }, [isCreated]);

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
    dispatch(submitRegister(data));
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
  };
};

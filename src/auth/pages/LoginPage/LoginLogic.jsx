import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginValidations } from '../../../validations/login.validations';
import { submitLogin } from '../../../store/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const LoginLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isCreated } = useSelector((state) => state.auth);

  const userLogIn = () => {
    toast.success('¡Te has logueado exitosamente!', { position: 'top-right', duration: 2000 });

    // redirect the user after the user have created
    setTimeout(() => {
      navigate('/');
    }, 2500);
  };

  // useEffect(() => {
  //   if (isCreated) {
  //     userLogIn();
  //   }
  // }, [isCreated]);

  // validate the inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidations),
  });

  // the data is already validate
  const onSubmit = async (data) => {
    // console.log(data);
    dispatch(submitLogin(data));
    navigate('/');
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
  };
};

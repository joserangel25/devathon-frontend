import { CiUser } from 'react-icons/ci';
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import { useToggle } from '../../../hooks/useToggle';
import { RegisterLogic } from './RegisterLogic';
import { Input } from '../../components/Input/';
import { Form } from '../../components/Form';
import { Link } from 'react-router-dom';
import { Error } from '../../components/Error';
import { Button } from '../../components/button';

const RegisterPage = () => {
  const { register, handleSubmit, errors, onSubmit, isLoading } = RegisterLogic();
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [showConfirmPassword, toggleShowConfirmPassword] = useToggle(false);
  const imageUrl =
    'https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80';

  return (
    <main className='flex min-h-screen flex-wrap'>
      <section
        className='flex-1 w-1/2 lg:w-auto bg-cover bg-center'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></section>
      <section className='flex items-center justify-center flex-1 w-1/2 lg:w-auto'>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          title='Crear Cuenta'
          paragraph='Información sobre la accesibilidad de lugares cercanos a ti.'
        >
          <Input
            register={register}
            name='name'
            type='text'
            placeholder='Nombre'
            autoComplete='off'
            error={errors.name?.message}
          >
            <CiUser />
          </Input>
          <Error content={errors.name?.message}></Error>
          <Input
            register={register}
            name='email'
            type='text'
            placeholder='Correo Eletronico'
            autoComplete='email'
            error={errors.email?.message}
          >
            <AiOutlineMail />
          </Input>
          <Error content={errors.email?.message}></Error>
          <Input
            register={register}
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Contraseña'
            autoComplete='new-password'
            error={errors.password?.message}
          >
            {showPassword ? (
              <AiOutlineEye onClick={toggleShowPassword} className='cursor-pointer' />
            ) : (
              <AiOutlineEyeInvisible onClick={toggleShowPassword} className='cursor-pointer' />
            )}
          </Input>
          <Error content={errors.password?.message}></Error>
          <Input
            register={register}
            name='passwordConfirmation'
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirmar Contraseña'
            autoComplete='new-password'
            error={errors.passwordConfirmation?.message}
          >
            {showConfirmPassword ? (
              <AiOutlineEye onClick={toggleShowConfirmPassword} className='cursor-pointer' />
            ) : (
              <AiOutlineEyeInvisible
                onClick={toggleShowConfirmPassword}
                className='cursor-pointer'
              />
            )}
          </Input>
          <Error content={errors.passwordConfirmation?.message}></Error>
          <p className='w-full text-neutral-500 pb-5'>
            Al crear una cuenta, aceptas la{' '}
            <strong className='text-neutral-700'>Política de privacidad</strong> y los{' '}
            <strong className='text-neutral-700'>Términos de uso</strong> de LugarAccesible.
          </p>
          <Button>
            {isLoading ? (
              <AiOutlineLoading3Quarters className='animate-spin w-full text-pk' />
            ) : (
              'Registrarse'
            )}
          </Button>
          <p className='w-full text-neutral-500 py-3'>
            ¿Ya tienes cuenta?
            <Link to='/login' className='text-neutral-700 font-bold'>
              {' '}
              Iniciar Sección
            </Link>
          </p>
        </Form>
      </section>
    </main>
  );
};

export default RegisterPage;

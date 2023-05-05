import { CiUser } from 'react-icons/ci';
import { AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useToggle } from '../../../hooks/useToggle';
import { RegisterLogic } from './RegisterLogic';
import { Input } from '../../components/Input/';
import { Form } from '../../components/Form';

const RegisterPage = () => {
  const { register, handleSubmit, errors, onSubmit } = RegisterLogic();
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [showConfirmPassword, toggleShowConfirmPassword] = useToggle(false);

  return (
    <main>
      <section></section>
      <section>
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
          <p className='text-red-700'>{errors.name?.message}</p>
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
          <p className='text-red-700'>{errors.email?.message}</p>
          <Input
            register={register}
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Contraseña'
            autoComplete='new-password'
            error={errors.password?.message}
          >
            {showPassword ? (
              <AiOutlineEye onClick={toggleShowPassword} />
            ) : (
              <AiOutlineEyeInvisible onClick={toggleShowPassword} />
            )}
          </Input>
          <p className='text-red-700'>{errors.password?.message}</p>
          <Input
            register={register}
            name='passwordConfirmation'
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirmar Contraseña'
            autoComplete='new-password'
            error={errors.passwordConfirmation?.message}
          >
            {showConfirmPassword ? (
              <AiOutlineEye onClick={toggleShowConfirmPassword} />
            ) : (
              <AiOutlineEyeInvisible onClick={toggleShowConfirmPassword} />
            )}
          </Input>
          <p className='text-red-700'>{errors.passwordConfirmation?.message}</p>
          <p>
            Al crear una cuenta, aceptas la <strong>Política de privacidad</strong> y los{' '}
            <strong>Términos de uso</strong> de LugarAccesible.
          </p>
          <button>Registrarse</button>
        </Form>
      </section>
    </main>
  );
};

export default RegisterPage;

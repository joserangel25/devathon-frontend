import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormulario } from '../../hooks/useFormulario';
import validateLogin from '../../validations/formularios/validateLogin';

const INITIAL_STATE = {
  email: '',
  password: '',
};
const EMAIL_ = 'correo@correo.com';
const PASSWORD_ = '123456';

export default function Login() {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');

  const handleSubmitLogin = () => {
    console.log('Iniciando sesión');
    setLoginError('');

    if (email === EMAIL_ && password === PASSWORD_) {
      navigate('/');
    } else {
      setLoginError('Los datos ingresados son incorrectos');
    }
    //TODO: Enviar los datos al back para el logueo
  };

  const { valoresInputs, errores, handleSubmit, handleChangeInputs } = useFormulario(
    INITIAL_STATE,
    validateLogin,
    handleSubmitLogin,
  );

  const { email, password } = valoresInputs;

  return (
    <div className='w-full h-full flex flex-col md:flex-row'>
      {/* Formulario */}
      <div className='p-10 md:w-3/6'>
        <h2 className='mb-8 text-4xl font-black text-green-700'>4All</h2>
        <p className=' text-green-600 font-bold text-lg'>
          Controla las búsquedas y guarda sitos favoritos. Todo con tu cuenta!
        </p>

        <p className='text-green-700 my-5'>Bienvenido de vuelta! Inicia sesión</p>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor='email' className='text-sm font-bold text-green-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='p-2 rounded-md outline-none border border-green-500 shadow-sm'
              value={email}
              onChange={handleChangeInputs}
            />
            {errores.email && (
              <span className='text-sm text-red-500 text-right'>{errores.email}</span>
            )}
          </div>

          <div className='flex flex-col gap-1 mb-3 '>
            <label htmlFor='password' className='text-sm font-bold text-green-700'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='p-2 rounded-md outline-none border border-green-500 bg-stone-50 shadow-sm'
              value={password}
              onChange={handleChangeInputs}
            />
            {errores.password && (
              <span className='text-sm text-red-500 text-right'>{errores.password}</span>
            )}
          </div>
          <input
            type='submit'
            value='Log In'
            className='p-3 rounded-md outline-none bg-green-600 text-white font-bold w-full cursor-pointer mt-3 hover:bg-green-800 transition-colors'
          />
        </form>
        {loginError && <span className='text-sm text-red-500 text-right'>{loginError}</span>}
        <div className='mt-5 flex justify-between'>
          <p className='text-green-700 cursor-pointer'>Recuperar la contraseña</p>
          <Link to='/register' className='text-green-700 cursor-pointer'>
            Regístrate!
          </Link>
        </div>
      </div>
      {/* Imagen login */}
      <div className=' md:w-3/6 bg-rose-50 p-10'></div>
    </div>
  );
}

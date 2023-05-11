import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
import { Select } from './Select';
import { SearchLogic } from './SearchLogic';
import { Link } from 'react-router-dom';
import { Option } from './option';

export const Search = () => {
  const { options, user, userOptions, toggleUserOptions, titleOption, changeTitleOption } =
    SearchLogic();

  return (
    <header className='fixed top-0 bg-white w-full h-[56px]  right-0 z-[2] flex items-center justify-between px-4 flex-wrap  shadow-lg shadow-neutral-300/40 '>
      <article className='h-[40px] basis-full lg:basis-1/2 flex gap-x-4'>
        {/* start logo */}
        <picture className='flex items-center'>
          <img src='/assets/logo/logo-black.svg' alt='logo' />
        </picture>
        {/* end logo */}

        <div className='bg-yellow-900 w-full relative max-w-[600px]'>
          <input
            type='text'
            placeholder='Buscar Lugar'
            className='w-full h-full placeholder:text-neutral-500 pl-4 outline-none text-neutral-700 border-[1px] border-neutral-300'
          />

          <div className='absolute right-16 top-0 h-full'>
            <Select
              options={options}
              titleOption={titleOption}
              changeTitleOption={changeTitleOption}
            />
          </div>

          <div className='absolute right-0 bg-primary-900 h-full top-0 w-[50px] text-white text-3xl flex items-center justify-center hover:bg-primary-700 cursor-pointer'>
            <AiOutlineSearch />
          </div>
        </div>
      </article>

      <article className='basis-full lg:basis-1/2 h-[40px] flex justify-end border[1px] border-primary-900'>
        {!user && (
          <Link to='/auth/login'>
            <button className='bg-primary-900 h-full px-4 text-white justify-center flex items-center gap-x-2'>
              <BiUser className='text-xl' /> Iniciar sesión
            </button>
          </Link>
        )}
        {user && (
          <article className='relative'>
            <picture className='h-[40px] w-[40px] cursor-pointer' onClick={toggleUserOptions}>
              <img
                className='w-full h-full'
                src={`https://ui-avatars.com/api/?name=${user?.name}&background=002966&rounded=true&color=fff`}
                alt='avatar user'
              />
            </picture>

            {userOptions && (
              <div className='absolute bg-red-900 right-0 top-[120%] min-w-[180px] border-[1px] border-neutral-100'>
                <Option>
                  <BiUser className='text-neutral-700 text-2xl' />
                  <p className='text-neutral-500  basis-full text-center'>Tu Cuenta</p>
                </Option>
                <Option>
                  <AiOutlineHeart className='text-neutral-700 text-2xl' />
                  <p className='text-neutral-500  basis-full text-center'>Favoritos</p>
                </Option>
                <Option>
                  <CiLogout className='text-neutral-700 text-2xl' />
                  <p className='text-neutral-500  basis-full text-center'>Cerrar sesión</p>
                </Option>
              </div>
            )}
          </article>
        )}
      </article>
    </header>
  );
};

import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
import { MdOutlineHistory } from 'react-icons/md';
import { Select } from './Select';
import { SearchLogic } from './SearchLogic';
import { Link } from 'react-router-dom';
import { Option } from './option';

export const Search = () => {
  const {
    queryValue,
    options,
    user,
    userOptions,
    toggleUserOptions,
    titleOption,
    searchHistory,
    isActiveInput,
    inputRef,
    changeTitleOption,
    closeUserSession,
    setQueryValue,
    search,
    handleFocus,
    handleBlur,
    deleteHistory,
  } = SearchLogic();

  return (
    <header className='fixed top-0 bg-white w-full h-[56px]  right-0 z-[2] flex items-center justify-between px-4 flex-wrap  shadow-lg shadow-neutral-300/40 '>
      <article className='h-[40px] basis-full lg:basis-1/2 flex gap-x-4'>
        {/* start logo */}
        <picture className='flex items-center'>
          <img src='/assets/logo/logo-black.svg' alt='logo' />
        </picture>
        {/* end logo */}

        <div className='bg-yellow-900 w-full max-w-[600px] flex'>
          {/* container input */}
          <div className='bg-blue-500 relative h-full basis-full' onBlur={handleBlur}>
            <input
              type='text'
              onChange={(event) => setQueryValue(event.target.value)}
              value={queryValue}
              onFocus={handleFocus}
              ref={inputRef}
              placeholder='Buscar Lugar'
              className='w-full h-full placeholder:text-neutral-500 pl-4 outline-neutral-300 text-neutral-700 border-[1px] border-neutral-300'
            />

            {isActiveInput && searchHistory.length > 0 && (
              <div className='bg-white absolute w-[100%] border-[1px] border-neutral-100 rounded-[10px]'>
                {searchHistory.map((history, index) => (
                  <button
                    onClick={() => {
                      setQueryValue(history.query);
                      inputRef.current.focus();
                    }}
                    key={history + index}
                    data-focus
                    className='flex justify-between px-4 w-full hover:bg-neutral-100 py-2'
                  >
                    <span className='flex gap-x-2 items-center'>
                      <MdOutlineHistory className='text-neutral-700' />{' '}
                      <span className='text-neutral-500 cursor-default'>{history.query}</span>
                    </span>
                    <a onClick={() => deleteHistory(index)} className='text-pm text-primary-700'>
                      Eliminar
                    </a>
                  </button>
                ))}
              </div>
            )}

            <div className='absolute right-2 top-0 h-full'>
              <Select
                options={options}
                titleOption={titleOption}
                changeTitleOption={changeTitleOption}
              />
            </div>
          </div>
          {/* end container input */}
          <div
            onClick={search}
            className='bg-primary-900 basis-[50px] h-full w-[50px] text-white text-3xl flex items-center justify-center hover:bg-primary-700 cursor-pointer'
          >
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
                <div onClick={closeUserSession}>
                  <Option>
                    <CiLogout className='text-neutral-700 text-2xl' />
                    <p className='text-neutral-500  basis-full text-center'>Cerrar sesión</p>
                  </Option>
                </div>
              </div>
            )}
          </article>
        )}
      </article>
    </header>
  );
};

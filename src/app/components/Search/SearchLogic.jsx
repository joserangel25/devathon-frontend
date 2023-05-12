import { useSelector, useDispatch } from 'react-redux';
import { setLogOut } from '../../../store/auth/authSlice';
import { setQuery, deleteOneSearchHistory } from '../../../store/search/searchSlice';
import { useToggle } from '../../../hooks/useToggle';
import { useState, useRef } from 'react';
import {
  MdRestaurantMenu,
  MdHotel,
  MdLocalHospital,
  MdShoppingCart,
  MdHomeWork,
} from 'react-icons/md';
import { BsPiggyBankFill } from 'react-icons/bs';

export const SearchLogic = () => {
  const { user } = useSelector((state) => state.auth);
  const { searchHistory } = useSelector((state) => state.search);
  const [userOptions, toggleUserOptions] = useToggle(false);
  const [titleOption, setTitleOption] = useState('Todos');
  const [queryValue, setQueryValue] = useState('');
  const [isActiveInput, setIsActiveInput] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleFocus = () => {
    setIsActiveInput(true);
  };

  function handleBlur(event) {
    const isButton = event.relatedTarget;
    const isButtonFocused = isButton?.dataset?.focus === 'true';
    // If the related target is not a button or does not have a "data-focus" attribute with a value of "true", set isActiveInput to false
    if (!isButtonFocused) {
      setIsActiveInput(false);
    }
  }

  const deleteHistory = (index) => {
    console.log(index);
    dispatch(deleteOneSearchHistory(index));
  };

  const closeUserSession = () => {
    dispatch(setLogOut());
  };

  const search = () => {
    dispatch(setQuery(queryValue));
  };

  const changeTitleOption = (title) => {
    setTitleOption(title);
  };
  // options select open
  const options = [
    {
      title: 'Todos',
      value: '',
      icon: <MdHomeWork />,
    },
    {
      title: 'Restaurantes',
      value: 'restaurant',
      icon: <MdRestaurantMenu />,
    },
    {
      title: 'Hoteles',
      value: 'lodging',
      icon: <MdHotel />,
    },
    {
      title: 'Hospitales',
      value: 'hospital',
      icon: <MdLocalHospital />,
    },
    {
      title: 'Bancos',
      value: 'bank',
      icon: <BsPiggyBankFill />,
    },
    {
      title: 'Supermercados',
      value: 'supermarket',
      icon: <MdShoppingCart />,
    },
  ];
  return {
    options,
    user,
    userOptions,
    toggleUserOptions,
    titleOption,
    queryValue,
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
  };
};

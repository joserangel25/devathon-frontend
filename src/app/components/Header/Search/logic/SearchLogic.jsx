/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, deleteOneSearchHistory } from '../../../../../store/search/searchSlice';
import { getResults } from '../../../../../store/search/thunk';
import { useToggle } from '../../../../../hooks/useToggle';
import { useState, useRef } from 'react';
import { isThereIcon } from '../../../../../helpers/filterByIcon';
import { useMapStore } from '../../../../hooks/useMapStore';

export const SearchLogic = () => {
  const { userLocation } = useSelector((state) => state.places);
  const { searchHistory, results, isLoading } = useSelector((state) => state.search);
  const { map } = useMapStore();
  const { filter } = useSelector((state) => state.filter);
  const [titleOption, setTitleOption] = useState('Todos');
  const [titleValue, setTitleValue] = useState('');
  const [queryValue, setQueryValue] = useState('');
  const [showResults, toggleShowResults] = useToggle(false);
  const [isActiveInput, setIsActiveInput] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  // when the user click a search
  const handleClick = (place) => {
    const { location, name, wheelchair_accessible_entrance, place_id, types } = place;
    const { lat, lng } = location;

    const latLng = new window.google.maps.LatLng(lat, lng);

    const urlIcon = isThereIcon(types[0]);

    const urlPath = () => {
      return filter && filter === 'accesible' && wheelchair_accessible_entrance
        ? `/public/assets/icons-map/icon-${urlIcon}-accesible.svg`
        : filter && filter === 'no-accesible' && !wheelchair_accessible_entrance
        ? `/public/assets/icons-map/icon-${urlIcon}-no.svg`
        : `/public/assets/icons-map/icon-${urlIcon}.svg`;
    };

    const urlImg = {
      url: urlPath(),
      scaledSize: new window.google.maps.Size(40, 40),
      labelOrigin: new window.google.maps.Point(90, 20),
      anchor: new window.google.maps.Point(20, 20),
    };

    const newMarker = new window.google.maps.Marker({
      position: latLng,
      map: map,
      title: name,
      icon: urlImg,
      label: {
        text: name,
        color:
          filter && filter === 'accesible' && wheelchair_accessible_entrance
            ? `#39AC73`
            : filter && filter === 'no-accesible' && !wheelchair_accessible_entrance
            ? `#F64C4C`
            : `#0052CC`, // adjust the color of the label text
      },
      place_id,
    });

    newMarker.addListener('click', (event) => {
      const clickedPlaceId = newMarker.placeId;
      console.log(clickedPlaceId);
    });

    // Pan the map to the new marker's location
    map.panTo(newMarker.getPosition());
    map.setZoom(14);
  };

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
    dispatch(deleteOneSearchHistory(index));
  };

  const search = () => {
    if (queryValue.length === 0) return;
    dispatch(setQuery(queryValue));
    const newSearch = {
      query: queryValue,
      lat: userLocation.lat,
      lng: userLocation.lng,
      types: titleValue,
    };
    if (!showResults) toggleShowResults();
    dispatch(getResults(newSearch));
  };

  const changeTitleOption = (title, value) => {
    setTitleOption(title);
    setTitleValue(value);
  };

  return {
    titleOption,
    queryValue,
    searchHistory,
    isActiveInput,
    inputRef,
    results,
    showResults,
    toggleShowResults,
    isLoading,
    changeTitleOption,
    setQueryValue,
    search,
    handleFocus,
    handleBlur,
    deleteHistory,
    handleClick,
  };
};

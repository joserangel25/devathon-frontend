import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMapStore } from './useMapStore';

// import { setPlaceId } from '../../store/map/mapSlice';
import { setIsDetailActive } from '../../store/detail/detailsSlice';

export const useDetailPlace = () => {
  const { isDetailActive, name } = useSelector((state) => state.detail);
  // const { modalDetail, placeId } = useMapStore();
  const dispatch = useDispatch();
  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(true);

  //para cuando esté el endpoint del Back
  useEffect(() => {
    const getDatos = async () => {
      try {
        const resp = await fetch('/mock/placesDetails.json');
        const placeFind = await resp.json();
        setPlace(placeFind[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    // if (placeId) {
    // }
    getDatos();
    // setTimeout(() => {
    //   setLoading(false);
    // }, 800);
  }, []);

  const showModalPlaceDetail = () => {
    dispatch(setIsDetailActive());
  };

  function placeMarkerAndPanTo(e, map, marker) {
    marker.setMap(null);
    marker.setOptions({
      position: e.latLng,
      map,
    });
    map.panTo(e.latLng);

    if (e.placeId) {
      dispatch(setPlaceId(e.placeId));
      showModalPlaceDetail(true);
    }
  }

  return {
    placeMarkerAndPanTo,
    showModalPlaceDetail,
    place,
    loading,
    isDetailActive,
    name,
  };
};

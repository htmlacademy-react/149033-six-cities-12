import {Navigate, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import Page404 from '../../pages/page-404/page-404';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useEffect } from 'react';
import { checkAuthAction } from '../../store/user-process/api-actions';
import Loader from '../loader/loader';
import { getIsOffersDataLoading } from '../../store/offers-data/selectors';


function App() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getIsOffersDataLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoaded) {
    return (
      <Loader />
    );
  }
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen />}
      />
      <Route
        path={AppRoute.Login}
        element={authorizationStatus === AuthorizationStatus.Auth ? <Navigate to={AppRoute.Main} /> : <LoginScreen />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <FavoritesScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={`${AppRoute.Room}:id`}
        element={
          <RoomScreen />
        }
      />
      <Route
        path="*"
        element={<Page404 />}
      />
    </Routes>
  );
}

export default App;

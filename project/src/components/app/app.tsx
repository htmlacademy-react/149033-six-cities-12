import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import Page404 from '../../pages/page-404/page-404';
import { Offer } from '../../types/offers';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


type AppProps = {
  nearOffers: Offer[];
  reviews: Review[];
};

function App( {nearOffers, reviews}: AppProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  // eslint-disable-next-line no-console, indent
console.log(authorizationStatus, isOffersDataLoading);
  // if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }
  const offers = useAppSelector((state)=>state.offers);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offers = {offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen offers = {offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}:id`}
          element={
            <RoomScreen
              offers={offers}
              nearOffers={nearOffers}
              reviews={reviews}
            />
          }
        />
        <Route
          path="*"
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

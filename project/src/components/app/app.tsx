import {Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import Page404 from '../../pages/page-404/page-404';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router/history-router';

type AppProps = {
  reviews: Review[];
};

function App( {reviews}: AppProps) {
  const offers = useAppSelector((state)=>state.offers);

  return (
    <HistoryRouter history={browserHistory}>
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
            <PrivateRoute>
              <FavoritesScreen offers = {offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}:id`}
          element={
            <RoomScreen
              offers={offers}
              reviews={reviews}
            />
          }
        />
        <Route
          path="*"
          element={<Page404 />}
        />
      </Routes>
    </HistoryRouter>

  );
}

export default App;

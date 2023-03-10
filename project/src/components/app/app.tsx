import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import Page404 from '../../pages/page-404/page-404';


const Setting = {
  CardsCount: 5,
} as const;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen cardsCount = {Setting.CardsCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen />}
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

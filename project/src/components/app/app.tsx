import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ErrorScreen from '../error-screen/error-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import PrivateRoute from '../private-route/private-route';
import PropertyScreen from '../property-screen/property-screen';

type AppScreenProps = {
  hotelsCount: number;
};

function App({ hotelsCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen hotelsCount={hotelsCount} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Room} element={<PropertyScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesScreen /></PrivateRoute>}
        />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ErrorScreen from '../error-screen/error-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import PrivateRoute from '../private-route/private-route';
import PropertyScreen from '../property-screen/property-screen';
import {OfferList} from '../../types/offers';

type AppScreenProps = {
  hotelsCount: number;
  offers: OfferList;
};


function App({ hotelsCount, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen hotelsCount={hotelsCount}  offers={offers}/>}>
          <Route path={`${AppRoute.Room}/:id`} element={<PropertyScreen/>} />
        </Route>
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route
          path={AppRoute.Favorites}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen offers={offers}/></PrivateRoute>}
        />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

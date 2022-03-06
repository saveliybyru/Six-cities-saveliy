import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ErrorScreen from '../error-screen/error-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import PrivateRoute from '../private-route/private-route';
import PropertyScreen from '../property-screen/property-screen';
import {OfferList} from '../../types/offers';
import Comments from '../../types/comments';

type AppScreenProps = {
  hotelsCount: number;
  offers: OfferList;
  comments: Comments;
};


function App({ hotelsCount, offers,comments }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen hotelsCount={hotelsCount}  offers={offers}/>} />
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route path={AppRoute.Room} element={<PropertyScreen comments={comments}/>} />
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

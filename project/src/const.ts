enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
}

const CITY = {
  title: 'Amsterdam',
  lat: 52.369553943508,
  lng: 4.85309666406198,
  zoom: 12,
};


enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';


export {AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, CITY};

import { Link } from 'react-router-dom';
import Header from '../header/header';
import { OfferList } from '../../types/offers';
import Offers from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';
import { AppRoute } from '../../const';

type FavoritesScreenProps = {
  offers: OfferList;
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  offers = Offers;
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={AppRoute.Main}>
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer)=>(offer.isFavorite ? <PlaceCard screenFavorite offer={offer} key={offer.id}></PlaceCard>: ''))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;

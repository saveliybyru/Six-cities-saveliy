import PlaceCard from '../place-card/place-card';
import Offers from '../../mocks/offers';
import {OfferList} from '../../types/offers';

type PlacesListProps = {
  offers: OfferList;
};


function PlacesList({offers} : PlacesListProps): JSX.Element {
  offers = Offers;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=><PlaceCard screenFavorite={false} offer={offer} key={offer.id}></PlaceCard>)}
    </div>
  );
}

export default PlacesList;

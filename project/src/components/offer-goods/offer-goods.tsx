import { capitalize } from '../../utils/utils';

type OfferGoodsProps = {
  goods: string[];
};

function OfferGoods({goods}: OfferGoodsProps): JSX.Element {
  return (
    <div className="property__inside" data-testid="goods">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((item) => (
          <li className="property__inside-item" key={item}>
            {capitalize(item)}
          </li>
        ))}
      </ul>
    </div>
  ); }

export default OfferGoods;

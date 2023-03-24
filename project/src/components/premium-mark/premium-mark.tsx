type PremiumMarkProps = {
  isPremium: boolean;
};

function PremiumMark({isPremium}: PremiumMarkProps): JSX.Element {
  return (
    <div>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>) : null}
    </div>
  );}

export default PremiumMark;

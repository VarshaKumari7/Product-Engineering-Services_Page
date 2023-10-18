import "../../Cardscomponent/Third-Card/thirdCard.scss";
const ThirdCard = () => {
  return (
    <div className="Third-card">
      <div className="Third-card-img">
        <img src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/A1B1D6DC-93B3-4DA6-A367-C3BE5C51CC59.png" />
      </div>
      <div>
        <span className="heading">Product Consulting</span>
      </div>
      <div className="Content">
        <img src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/826DEA4F-EAB6-44BB-AC8C-62EE89309D87.svg" />
        <span>No Crowdsourcing</span>
      </div>
    </div>
  );
};

export default ThirdCard;

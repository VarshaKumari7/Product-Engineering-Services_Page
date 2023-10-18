import "../../Cardscomponent/Third-Card/thirdCard.scss";
const ThirdCard = ({ cardcontent }: any) => {
  return (
    <div className="Third-card">
      <div className="Third-card-img">
        <img src={cardcontent.img} />
      </div>
      <div className="heading-div">
        <span className="heading">{cardcontent.heading}</span>
      </div>
      <div className="Content">
        {/* {cardcontent.content.map((cont: any, index: number) => {
          return;
        })} */}
        <img src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/826DEA4F-EAB6-44BB-AC8C-62EE89309D87.svg" />
        <span>No Crowdsourcing</span>
      </div>
    </div>
  );
};

export default ThirdCard;

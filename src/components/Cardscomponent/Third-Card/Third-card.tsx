import React from "react";
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
        {cardcontent.content.map((cont: any, index: number) => {
          return <ChildContent key={index} cont={cont} />;
        })}
      </div>
    </div>
  );
};

const ChildContent = ({ cont }: any) => {
  return (
    <div className="child-content">
      <img src={cont.checkbox} alt="Checkbox" />
      <span>{cont.text}</span>
    </div>
  );
};

export default ThirdCard;

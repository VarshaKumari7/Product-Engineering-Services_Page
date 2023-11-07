import "./secondCard.scss";
const SecondCard = ({ cardData }: any) => {
  return (
    <div className="S-card">
      <div className="S-card-img">
        <img src={cardData.img} />
      </div>
      <div className="user">
        <span className="User-Researchers">{cardData.heading}</span>
      </div>
      <div className="To-ensure-the-user-r">
        <span>{cardData.content}</span>
      </div>
    </div>
  );
};

export default SecondCard;

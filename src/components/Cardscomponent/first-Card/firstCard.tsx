import "./firstCard.scss";

const Card = ({ ele }: any) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={ele.img} />
      </div>
      <div className="consulting">
        <span className="Product-Consulting">{ele.heading}</span>
      </div>
      <div className="Count-on-the-experts">
        <span>{ele.content}</span>
      </div>
    </div>
  );
};

export default Card;

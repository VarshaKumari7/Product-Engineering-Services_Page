import "./firstCard.scss";
const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/D2715DC7-9786-4113-A017-D4B9FFAB9BA9.png" />
      </div>
      <div>
        <span className="Product-Consulting">Product Consulting</span>
      </div>
      <div className="Count-on-the-experts">
        <span>
          Count on the experts at Binary's Product Consulting Services as your
          comprehensive solution to get your products to market faster and with
          higher quality. Our unique, consultative process will provide you with
          a higher success rate in bringing products to market while maximizing
          profit.
        </span>
      </div>
    </div>
  );
};

export default Card;

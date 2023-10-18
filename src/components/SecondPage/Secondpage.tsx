import SecondCard from "../Cardscomponent/SecondCard/Secondcard";
import { secondCardData } from "../../datafile/SecondCardData";
import "../SecondPage/secondpage.scss";

const Secondpage = () => {
  return (
    <div className="second-page">
      <div className="Supporting-Roles">Supporting Roles</div>
      <div className="S-card-sec">
        {secondCardData.map((cardData: any, index: number) => {
          return (
            <SecondCard
              key={index}
              cardData={cardData}
              // img={ele.img}
              // content={ele.content}
              // heading={ele.heading}
            />
          );
        })}
      </div>
      <div className="G-D-Model">
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/004D929F-346E-4103-A4EE-13088E825D3A.png"
          className="B-img"
        />
        {/* <img
          src="img/bitmap-copy-4.png"
          srcSet="img/bitmap-copy-4@2x.png 2x,
             img/bitmap-copy-4@3x.png 3x"
          className="G-D-Model-img"
        ></img> */}
        <div>
          <span className="Global-Delivery-Mode">Global Delivery Model</span>
        </div>
        <div>
          <img
            src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/77A65C9C-3148-406D-8538-E1C149D8AB1E-optimized.png"
            className="GDM_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Secondpage;

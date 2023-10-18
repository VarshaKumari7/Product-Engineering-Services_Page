import Card from "../Cardscomponent/first-Card/firstCard";
import "../Firstpage/first-page.scss";
import { cardData } from "../../datafile/cardData";
const FirstPage = () => {
  return (
    <>
      {" "}
      <div className="man-holding-technology-gear-wheel-interface">
        <img src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/C210CC26-EDDE-4D25-86A8-71DC80148376.png"></img>
        <div className="Build-Future-Proof-S">
          <span>
            Build Future-Proof Software Products with
            <span className="text-style-1"> Products Engineering Services</span>
          </span>
          <div>
            <span className="Consult-With-Our-Exp">
              Consult With Our Experts
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="Our-Product-Engineer">
          Our Product Engineering Services
        </div>
        {/* </div> */}
        <div className="card-sec">
          {cardData.map((ele: any, index: number) => {
            return (
              <Card
                key={index}
                ele={ele}

                // img={ele.img}
                // content={ele.content}
                // heading={ele.heading}
              />
            );
          })}
        </div>
      </div>
      <div className="footer-section">
        <span className="-Member-App-Serv">100+ Member App Services Team</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">Industry Specific Solutions</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">
          Frameworks & Solution Accelrators
        </span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">App. Support & Maintanence</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">Offshore Development Center</span>
      </div>
    </>
  );
};

export default FirstPage;

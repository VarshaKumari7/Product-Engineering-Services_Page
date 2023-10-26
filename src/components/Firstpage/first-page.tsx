import Card from "../Cardscomponent/first-Card/firstCard";
import "../Firstpage/first-page.scss";
import { cardData } from "../../datafile/cardData";
const FirstPage = () => {
  return (
    <>
      {" "}
      <div className="man-holding-technology-gear-wheel-interface">
        <img src={require("../../img/background-img.png")}></img>
        <div className="Build-Future-Proof-S">
          <span>
            Build Future-Proof Software Products with
            <span className="text-style-1"> Products Engineering Services</span>
          </span>
          <div className="Our-Experts">
            <span className="Consult-With-Our-Exp">
              Consult With Our Experts
            </span>
          </div>
        </div>
      </div>
      <div className="Our-Product">
        <div className="Our-Product-Engineer">
          Our Product Engineering Services
        </div>
        {/* </div> */}
        <div className="card-sec">
          {cardData.map((ele: any, index: number) => {
            return <Card key={index} ele={ele} />;
          })}
        </div>
      </div>
      <div className="footer-section">
        <span className="-Member-App-Serv">100+ Member App Services Team</span>
        <img
          src={require("../../img/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">Industry Specific Solutions</span>
        <img
          src={require("../../img/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">
          Frameworks & Solution Accelrators
        </span>
        <img
          src={require("../../img/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">App. Support & Maintanence</span>
        <img
          src={require("../../img/vector.png")}
          className="Group-14-Copy"
        ></img>
        <span className="-Member-App-Serv">Offshore Development Center</span>
      </div>
    </>
  );
};

export default FirstPage;

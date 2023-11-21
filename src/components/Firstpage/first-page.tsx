import Card from "../Cardscomponent/first-Card/firstCard";
import "../Firstpage/first-page.scss";
import { cardData } from "../../datafile/cardData";
import { useEffect, useState } from "react";
import SpeakToOurExperts from "../Popup/Speak-to-our-experts";
const FirstPage = () => {
  const [open, setOpen] = useState(false);

  const consultExperts = () => {
    console.log("consult Our experts");
    setOpen(true);
  };
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open]);
  return (
    <>
      <div className="man-holding-technology-gear-wheel-interface">
        <div className="front">
          <span className="Build-Future-Proof-S">
            Build Future-Proof Software Products with
            <span className="text-style-1"> Products Engineering Services</span>
          </span>
          <div className="Our-Experts">
            <span className="Consult-With-Our-Exp btn" onClick={consultExperts}>
              Consult With Our Experts
            </span>
            <div>
              {open && (
                <SpeakToOurExperts
                  open={open}
                  handleClose={() => setOpen(false)}
                />
              )}
            </div>
          </div>
          {/* <SpeakToOurExperts open={open} /> */}
        </div>
        {/* </div> */}
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
        <span className="-Member-margin">100+ Member App Services Team</span>
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
        <span className="-Member-margin-right">
          Offshore Development Center
        </span>
      </div>
    </>
  );
};

export default FirstPage;

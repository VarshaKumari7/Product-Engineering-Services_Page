import "../Thirdpage/thirdpage.scss";
import { ThirdCardData } from "../Cardscomponent/carddata/ThirdCardData";
import ThirdCard from "../Cardscomponent/Third-Card/Third-card";

const Thirdpage = () => {
  return (
    <div className="third-page">
      <div className="Our-Plan-Process">Our Plan & Process</div>
      <div>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/4557A9D3-0554-4E26-BD30-8405A55C9D98.png"
          className="third-page-img1"
        ></img>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/63385C9A-F5AA-4987-A9BD-199EDBFF465B.png"
          className="third-page-img2"
        ></img>
      </div>
      <div className="Thirdpage-footer-section">
        <span className="-Certified-BI-Exp">50+ Certified BI Experts</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Innovation Labs</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Data Visualization</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Data Governance</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Industry Specific Solutions</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          srcSet="img/group-14-copy@2x.png 2x,
             img/group-14-copy@3x.png 3x"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">
          5+ years of experience in Data Science
        </span>
      </div>
      <div>
        <div className="Our-Plan-Process">Features at a Glance</div>
        <div className="third-card-sec">
          {ThirdCardData.map((ele: any, index) => {
            return (
              <ThirdCard
                key={index}
                // cardcontent={ele}
              />
            );
          })}
        </div>
        <div className="last-section">
          <img src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/9BEABA06-2DF4-439A-A1A5-1ADCA7E60B5A.png" />
          <div className="GET-AHEAD">
            <span className="Get-ahead-in-your-In">
              <span className="text-style-1">Get ahead in your Industry</span>
              <span className="text-style-2">
                & Take Your Enterprise to a more
              </span>
              Advanced Tech-Driven Future with Us.
            </span>
            <div className="Rectangle-2-Copy-10">
              <span className="Get-In-Touch">Get In Touch</span>
            </div>
          </div>
        </div>
      </div>
      <div className="End-of the-page">
        <span className="Copyright-2010-202">
          Copyright © 2010-2021 Binary Informatics Pvt. Ltd. | Company All
          rights reserved | Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Thirdpage;

import SecondCard from "../Cardscomponent/SecondCard/Secondcard";
import { secondCardData } from "../../datafile/SecondCardData";
import "../SecondPage/secondpage.scss";

const Secondpage = () => {
  return (
    <div className="second-page">
      <div className="Supporting-Roles">Supporting Roles</div>
      <div className="S-card-sec">
        {secondCardData.map((cardData: any, index: number) => {
          return <SecondCard key={index} cardData={cardData} />;
        })}
      </div>
      <div className="G-D-Model">
        {/* <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/004D929F-346E-4103-A4EE-13088E825D3A.png"
          className="B-img"
        /> */}
        <img src={require("../../img/375-img.png")} className="B-img" />
        <div>
          <span className="Global-Delivery-Mode">Global Delivery Model</span>
        </div>
        <div className="content-375">
          <div className="Rectangle-375">
            <span className="Onsite">Onsite</span>
          </div>

          <span className="Customer-facing-SME">
            Customer facing, SME's, Project Management, Consultants, Architects,
            Business Analysts and Technical Support Resources
          </span>
          <div className="Rectangle-375">
            <span className="Onsite">Offshore</span>
          </div>

          <span className="Customer-facing-SME">
            Offshore delivery and support for better cost savings and
            scalability. Regulated offshore development with client driven
            process. Staged transition for large scale projects.
          </span>

          <div>
            <img src={require("../../img/375-img1.png")} className="GDM_img" />
          </div>

          <div className="small-text-container">
            <div className="text-inbox">
              <img src={require("../../img/375-img2.webp")} />
              <span className="Reducing-the-Service">
                Reducing the Service cost by 20% or more
              </span>
            </div>
            <div className="text-inbox">
              <img src={require("../../img/375-img2.webp")} />
              <span className="Reducing-the-Service">
                Rapid Scalability of Resources
              </span>
            </div>
            <div className="text-inbox">
              <img src={require("../../img/375-img2.webp")} />
              <span className="Reducing-the-Service">
                Best Practices & Highest Quality Standards
              </span>
            </div>
            <div className="text-inbox">
              <img src={require("../../img/375-img2.webp")} />
              <span className="Reducing-the-Service">
                24/7 Support Capability
              </span>
            </div>
            <div className="text-inbox">
              <img src={require("../../img/375-img2.webp")} />
              <span className="Reducing-the-Service">
                Lowering Total Cost Of Ownership
              </span>
            </div>
            <div className="text-inbox">
              <img src={require("../../img/375-img2.webp")} />
              <span className="Reducing-the-Service">
                Offshore Dedicated Centers
              </span>
            </div>
            <div className="text-inbox">
              <img src={require("../../img/375-img2.webp")} />
              <span className="Reducing-the-Service">
                Reducing the Service cost by 20% or more
              </span>
            </div>
            <div className="text-inbox">
              <img src={require("../../img/375-img2.webp")} />
              <span className="Reducing-the-Service">
                Reducing the Service cost by 20% or more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;

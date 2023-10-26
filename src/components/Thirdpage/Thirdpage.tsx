import "../Thirdpage/thirdpage.scss";
import { thirdCardData } from "../../datafile/ThirdCardData";
import ThirdCard from "../Cardscomponent/Third-Card/Third-card";

const Thirdpage = () => {
  return (
    <div className="third-page">
      <div className="Our-Plan-Process">Our Plan & Process</div>
      <div>
        <img
          src={require("../../img/375-img3.png")}
          className="third-page-img1"
        ></img>
        <img
          src={require("../../img/375-img4.png")}
          className="third-page-img2"
        ></img>
      </div>
      {/* 34567890-----------0987654321234567890-5432134 */}

      <div className="gradient-copy">
        <div className="new-content">
          <img src={require("../../img/375-img5.png")} />
          <span className="-NDA-and-IP-Protect">
            • NDA and IP Protection <br></br>• Master Services Agreement{" "}
            <br></br>• Statement of Work
          </span>
        </div>
        <div className="new-content">
          <img src={require("../../img/375-img6.png")} />
          <span className="-NDA-and-IP-Protect">
            • Work Closely with Customers <br></br>• IP Protection Agreements
            with Every Resource <br></br>• Induction
          </span>
        </div>
        <div className="new-content">
          <img src={require("../../img/375-img7.png")} />
          <span className="-NDA-and-IP-Protect">
            • (on-site/ offshore) <br></br>• Understand the Technology,
            Requirements, Processes and build good working relationship
          </span>
        </div>
        <div className="new-content">
          <img src={require("../../img/375-img8.png")} />
          <span className="-NDA-and-IP-Protect">
            • Network and Servers <br></br>• Security and IP Protection{" "}
            <br></br>• Source Control <br></br>• Collaboration Tools <br></br> •
            Development Tools <br></br>• Environments Set up
          </span>
        </div>
        <div className="new-content">
          <img src={require("../../img/375-img9.png")} />
          <span className="-NDA-and-IP-Protect">
            • Communication <br></br>• Requirements <br></br>• Dev Tools &
            Frameworks set up <br></br>• Technical Documents <br></br>• Coding
            Standards & Process <br></br>• Code Review & Intermediate Release
            Plan <br></br>• Release Management
          </span>
        </div>
        <div className="get-started">
          <img src={require("../../img/375-img10.png")} />
        </div>
      </div>

      <div className="Thirdpage-footer-section">
        <span className="-Certified-BI-Exp">50+ Certified BI Experts</span>
        <img
          // src={require("../../img/vector.svg")}
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Innovation Labs</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Data Visualization</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Data Governance</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">Industry Specific Solutions</span>
        <img
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/832391AB-3BA8-49FD-8BAB-79EF62699D9C.svg"
          className="Group-14-Copy"
        ></img>
        <span className="-Certified-BI-Exp">
          5+ years of experience in Data Science
        </span>
      </div>
      <div>
        <div className="Our-Plan-Process">Features at a Glance</div>
        <div className="third-card-sec">
          {thirdCardData.map((cardcontent: any, index) => {
            return <ThirdCard key={index} cardcontent={cardcontent} />;
          })}
        </div>
        <div className="last-section">
          <img src={require("../../img/375-bg-img.png")} />
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
      <div className="End-of-the-page">
        <span className="Copyright-2010-202">
          Copyright © 2010-2021 Binary Informatics Pvt. Ltd. Company All rights
          reserved | Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Thirdpage;

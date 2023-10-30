import SecondCard from "../Cardscomponent/SecondCard/Secondcard";
import { secondCardData } from "../../datafile/SecondCardData";
import "../SecondPage/secondpage.scss";
import { useEffect, useState } from "react";

const Secondpage = () => {
  // const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);
  // const [screenWidth, setScreenWidth] = useState(window.screen.width);

  // const currentScreenWidth = () => {
  //   setScreenWidth(() => window.innerWidth);
  //   console.log("Screen Size ", screenWidth);
  // };

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth >= 1024);
  //   console.log("uetuiufqhhj", isDesktop);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", currentScreenWidth);
  //   return () => window.removeEventListener("resize", currentScreenWidth);
  // }, [screenWidth]);

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // }, [screenWidth]);
  return (
    <div className="second-page">
      <div className="Supporting-Roles">Supporting Roles</div>
      <div className="S-card-sec">
        {secondCardData.map((cardData: any, index: number) => {
          return <SecondCard key={index} cardData={cardData} />;
        })}
      </div>
      <div className="G-D-Model">
        <div>
          {/* {isDesktop ? (
            <> */}
          <img
            src={require("../../img/GDM-bg-1440.png")}
            className="B-img-786"
          />
          <img
            src={require("../../img/GDM-desktop.png")}
            className="GDM-desktop"
          />
          {/* </>
          ) : (
            <> */}
          <img
            src={require("../../img/GDM-bg-375.png")}
            className="B-img-375"
          />
          <div>
            <span className="Global-Delivery-Mode">Global Delivery Model</span>
          </div>
          <div className="content-375">
            <div className="Rectangle-375">
              <span className="Onsite">Onsite</span>
            </div>

            <span className="Customer-facing-SME">
              Customer facing, SME's, Project Management, Consultants,
              Architects, Business Analysts and Technical Support Resources
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
              <img
                src={require("../../img/375-img1.png")}
                className="GDM_img"
              />
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
          {/* </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Secondpage;

import FirstPage from "../Firstpage/first-page";
import "../HeaderSection/header.scss";
const Header = () => {
  return (
    <>
      <div className="-header">
        <div className="logo">
          <img src={require("../../img/binarylogo.png")} alt="" />
        </div>
        <div className="header-contact">
          {" "}
          <div className="cont">
            <p>Talk to an Expert Call on Toll Free</p>
            <span>+1 650 763 8001</span>
          </div>
          <div className="Rectangle">
            <p className="try-free">TRY IT FREE</p>
          </div>
        </div>
      </div>
      <div>
        <FirstPage />
      </div>
    </>
  );
};

export default Header;

import { useEffect, useState } from "react";
import FirstPage from "../Firstpage/first-page";
import "../HeaderSection/header.scss";
import TryItFree from "../Popup/Try-it-free";
const Header = () => {
  const [open, setOpen] = useState(false);
  const talkToAnExpert = () => {
    setOpen(true);
    console.log("Talk To An Expert");
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
            <p className="try-free" onClick={talkToAnExpert}>
              TRY IT FREE
            </p>
          </div>
          {open && <TryItFree open={open} handleClose={() => setOpen(false)} />}
        </div>
      </div>
      <div>
        <FirstPage />
      </div>
    </>
  );
};

export default Header;

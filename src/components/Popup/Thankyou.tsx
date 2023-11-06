import React from "react";
import "../Popup/popup.scss";
import { Dialog, TextField } from "@mui/material";

const ThankYou = ({ handleCloseThank, openThank }: any) => {
  // const submitHandler = () => {
  //   console.log("THanks");
  // };
  return (
    <Dialog
      open={openThank}
      onClose={handleCloseThank}
      style={{ height: "380px" }}
      className="connected"
    >
      <div className="Rectangle-111">
        <div className="cross">
          <img
            src={require("../Popup/cancel.png")}
            onClick={handleCloseThank}
          />
        </div>
        <div style={{ textAlign: "center" }} className="img-png">
          <img src={require("../Popup/thankyou.png")} />
        </div>
        <div className="Thank-You-For-Contac">Thank You For Contacting Us!</div>
        <div className="We-appreciate-that-y">
          We appreciate that you’ve taken the time to contact us. We will get
          back to you very soon.
        </div>
      </div>
    </Dialog>
  );
};

export default ThankYou;

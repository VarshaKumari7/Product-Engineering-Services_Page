import React from "react";
import "../Popup/popup.scss";

const ThankYou = ({ handleCloseThank, openThank }: any) => {
  // const submitHandler = () => {
  //   console.log("THanks");
  // };
  return (
    <div className="form-modal">
      <div className="modal fade" id="thanksModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content thanks-modal">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={handleCloseThank}
              >
                &times;
              </button>
            </div>
            <div className="modal-body thanks_body">
              <img src="./assests/submitThank.png" alt="" />
              <h1 className="thanks_heading">Thank You For Contacting Us!</h1>
              <p className="thanks_subheadinig">
                We appreciate that you’ve taken the time to contact us. We will
                get back to you very soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

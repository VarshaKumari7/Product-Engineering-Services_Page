import React, { useEffect, useState } from "react";
import "../Popup/popup.scss";
import ReactDOM from "react-dom";
import ThankYou from "./Thankyou";
const StayConncetedWithUs = ({ handleClose, open }: any) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
  });

  const [openThank, setOpenThank] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = () => {
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      company: "",
    });

    setOpenThank(true);
  };

  const handleCloseThank = () => {
    setOpenThank(false);
  };

  const portalContainer = document.getElementById("portalModalDiv");
  if (!portalContainer) {
    console.error("Portal container not found in the DOM");
    return null;
  }
  return ReactDOM.createPortal(
    <div className="form-modal">
      <div className="modal fade" id="connectedModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content connected-modal">
            <div className="modal-header">
              <h4 className="modal-title">Stay Connected With us</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <div className="modal-body connected-body">
              <form action="javascript: void(o)" id="connectionForm">
                <input
                  value={formData.name}
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name*"
                  onChange={handleInputChange}
                />
                <input
                  value={formData.email}
                  type="text"
                  name="email"
                  required
                  placeholder="Work Email Address*"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Company Name*"
                  onChange={handleInputChange}
                  value={formData.company}
                />
                <div className="terms privacy">
                  <input type="checkbox" id="connectionTerm" />
                  <p>
                    By submitting this information you agree to our
                    <a>
                      {" "}
                      <span
                        style={{
                          color: "#0f0a4b",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Term of Service
                      </span>
                    </a>
                    and{" "}
                    <a>
                      <span
                        style={{
                          color: "#0f0a4b",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Privacy Policy
                      </span>
                    </a>
                  </p>
                </div>
                <div className="Rectangle-2-Copy-11">
                  <button
                    className="btn btn-free Submit"
                    type="submit"
                    id="connectionFormSubmitButton"
                    onClick={submitHandler}
                  >
                    Continue
                  </button>
                  {/* {open && (
                    <ThankYou
                      openThank={openThank}
                      handleCloseThank={handleCloseThank}
                    />
                  )} */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalContainer
  );
};

export default StayConncetedWithUs;

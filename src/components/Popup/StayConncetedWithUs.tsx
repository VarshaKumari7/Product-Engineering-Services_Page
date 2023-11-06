import React, { useState } from "react";
import "../Popup/popup.scss";
import { Dialog, TextField } from "@mui/material";
import ThankYou from "./Thankyou";
const StayConncetedWithUs = ({ handleClose, open }: any) => {
  const [formData, setFormData] = React.useState({
    full_name: "",
    work_email_address: "",
    company_name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [openThank, setOpenThank] = useState(false);
  const submitHandler = () => {
    console.log("Form Data:", formData);
    setFormData({
      full_name: "",
      work_email_address: "",
      company_name: "",
    });
    setOpenThank(true);
  };
  const handleCloseThank = () => {
    setOpenThank(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} style={{ maxHeight: "430px" }}>
      <div className="Rectangle-1 connected" style={{ height: "430px" }}>
        <div className="headings">
          <span className="Try-Free-Pilot-For-1">Stay Connected With us</span>
          <img src={require("../Popup/cancel.png")} onClick={handleClose} />
        </div>
        <div className="body-content">
          <span className="Full-Name">
            Full Name<span className="text-style-1">*</span>
          </span>
          <TextField
            variant="standard"
            type="text"
            value={formData.full_name}
            name="full_name"
            onChange={handleInputChange}
          />

          <span className="Work-Email-Address">
            Work Email Address<span className="text-style-1">*</span>
            <div className="Line-Copy-36">
              <TextField
                variant="standard"
                type="text"
                value={formData.work_email_address}
                name="work_email_address"
                onChange={handleInputChange}
              />
            </div>
          </span>
          <span className="Company-Name">
            Company Name<span className="text-style-1">*</span>
          </span>
          <div className="Line-Copy-36">
            <TextField
              variant="standard"
              type="text"
              value={formData.company_name}
              name="company_name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="Rectangle-2-Copy-11">
          <input type="checkbox" />
          <span className="By-submitting-this-i">
            By submitting this information you agree to our
            <span className="text-style-1">Term of Service</span>and
            <span className="text-style-2">Privacy Policy</span>
          </span>
        </div>
        <div className="Rectangle-2-Copy-10">
          <span className="Submit" onClick={submitHandler}>
            Continue
          </span>
          {open && (
            <ThankYou
              openThank={openThank}
              handleCloseThank={handleCloseThank}
            />
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default StayConncetedWithUs;

import React, { useState } from "react";
import "../Popup/popup.scss";
import { Dialog, TextField } from "@mui/material";
import ThankYou from "./Thankyou";
const StayConncetedWithUs = ({ handleClose, open }: any) => {
  const [openThank, setOpenThank] = useState(false);
  const [formData, setFormData] = React.useState({
    full_name: "",
    work_email_address: "",
    company_name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
    <Dialog
      open={open}
      onClose={handleClose}
      style={{ height: "430px" }}
      className="connected"
    >
      <div className="Rectangle-1">
        <div className="headings">
          <span className="Try-Free-Pilot-For-1">Stay Connected With us</span>
          <img src={require("../Popup/cancel.png")} onClick={handleClose} />
        </div>
        {/* <div className="Full-Name">Full Name</div> */}
        <TextField
          className="Full-Name"
          variant="standard"
          type="text"
          value={formData.full_name}
          name="full_name"
          onChange={handleInputChange}
          label="Full Name"
        />

        {/* <div className="Work-Email-Address">Work Email Address</div> */}

        <TextField
          className="Work-Email-Address"
          variant="standard"
          type="text"
          value={formData.work_email_address}
          name="work_email_address"
          onChange={handleInputChange}
          label="Work Email Address"
        />

        {/* <div className="Company-Name">Company Name</div> */}

        <TextField
          className="Company-Name"
          variant="standard"
          type="text"
          value={formData.company_name}
          name="company_name"
          onChange={handleInputChange}
          label="Company Name"
        />

        <div className="Rectangle-2-Copy-11">
          <input type="checkbox" />
          <span className="By-submitting-this-i">
            <span>By submitting this information you agree to our </span>
            <span className="text-style-1">Term of Service</span>
            <span> and </span>
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

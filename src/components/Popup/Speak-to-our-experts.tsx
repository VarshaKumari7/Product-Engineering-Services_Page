import * as React from "react";
import "../Popup/popup.scss";
import Dialog from "@mui/material/Dialog";
import { MenuItem, TextField } from "@mui/material";
interface Props {
  open?: boolean;
  handleClose?: any;
}

interface Props {
  open?: boolean;
  handleClose?: any;
}
const SpeakToOurExperts = ({ open, handleClose }: any) => {
  // const [details, setDetails] = useState()

  const [formData, setFormData] = React.useState({
    full_name: "",
    phone_number: "",
    work_email_address: "",
    company_name: "",
    select_services: "",
    contact: "",
    your_timeline: "",
    how_can_we_contact_you: "",
  });

  const Services = [
    {
      value: "Google meet",
      label: "$",
    },
    {
      value: "Call",
      label: "฿",
    },
    {
      value: "Email",
      label: "¥",
    },
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = () => {
    console.log("Form Data:", formData);
    setFormData({
      full_name: "",
      phone_number: "",
      work_email_address: "",
      company_name: "",
      select_services: "",
      contact: "",
      your_timeline: "",
      how_can_we_contact_you: "",
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      {/* <DialogTitle> */}
      <div className="Rectangle-1">
        <div className="headings">
          <span className="Speak-To-Our-Experts">Speak To Our Experts</span>
          <img src={require("../Popup/cancel.png")} onClick={handleClose} />
        </div>
        <span className="Please-fill-the-form">
          Please fill the form below.
        </span>
        <div className="body-content">
          <div className="Full-Name">Full Name</div>
          <TextField
            variant="standard"
            type="text"
            value={formData.full_name}
            name="full_name"
            onChange={handleInputChange}
          />
          <div className="Phone-Number">Phone Number</div>
          <TextField
            variant="standard"
            type="text"
            value={formData.phone_number}
            name="phone_number"
            onChange={handleInputChange}
          />
          <div className="Work-Email-Address">Work Email Address</div>
          <TextField
            variant="standard"
            type="text"
            value={formData.work_email_address}
            name="work_email_address"
            onChange={handleInputChange}
          />
          <div className="Company-Name">Company Name</div>
          <TextField
            variant="standard"
            type="text"
            value={formData.company_name}
            name="company_name"
            onChange={handleInputChange}
          />
          <div className="Select-Services">Select Services</div>
          <TextField
            variant="standard"
            type="text"
            value={formData.select_services}
            onChange={handleInputChange}
            name="select_services"
          />
          <div className="Company-Name">Your Timeline</div>
          <TextField
            variant="standard"
            type="text"
            value={formData.your_timeline}
            name="your_timeline"
            onChange={handleInputChange}
          />
          <div className="Services">
            <span className="How-can-we-contact-y">
              How can we contact you?
            </span>
            <TextField
              variant="standard"
              type="text"
              select
              onChange={handleInputChange}
              name="contact"
            >
              {Services.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>

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
              Submit
            </span>
          </div>
          <div className="last-content-popup">
            <img src={require("../Popup/lock.png")} />
            <span className="The-information-shar">
              The information shared above will help us get back to you.
            </span>
          </div>
        </div>
      </div>
      {/* </DialogTitle> */}
    </Dialog>
  );
};

export default SpeakToOurExperts;

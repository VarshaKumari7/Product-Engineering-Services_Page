import React, { useState } from "react";
import "../Popup/popup.scss";
import { Dialog, TextField } from "@mui/material";
import ThankYou from "./Thankyou";
const StayConncetedWithUs = ({ handleClose, open }: any) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [openThank, setOpenThank] = useState(false);
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
  return (
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
    </div>
  );
};

export default StayConncetedWithUs;
// <Dialog
//   open={open}
//   onClose={handleClose}
//   style={{ maxHeight: "430px" }}
//   classNameName="stayconnected"
// >
//   <div classNameName="Rectangle-1 connected" style={{ height: "430px" }}>
//     <div classNameName="headings">
//       <span classNameName="Try-Free-Pilot-For-1">Stay Connected With us</span>
//       <img src={require("../Popup/cancel.png")} onClick={handleClose} />
//     </div>
//     <div classNameName="body-content">
//       <span classNameName="Full-Name">
//         Full Name<span classNameName="text-style-1">*</span>
//       </span>
//       <TextField
//         variant="standard"
//         type="text"
//         value={formData.full_name}
//         name="full_name"
//         onChange={handleInputChange}
//       />

//       <span classNameName="Work-Email-Address">
//         Work Email Address<span classNameName="text-style-1">*</span>
//         <div classNameName="Line-Copy-36">
//           <TextField
//             variant="standard"
//             type="text"
//             value={formData.work_email_address}
//             name="work_email_address"
//             onChange={handleInputChange}
//           />
//         </div>
//       </span>
//       <span classNameName="Company-Name">
//         Company Name<span classNameName="text-style-1">*</span>
//       </span>
//       <div classNameName="Line-Copy-36">
//         <TextField
//           variant="standard"
//           type="text"
//           value={formData.company_name}
//           name="company_name"
//           onChange={handleInputChange}
//         />
//       </div>
//     </div>
//     <div classNameName="Rectangle-2-Copy-11">
//       <input type="checkbox" />
//       <span classNameName="By-submitting-this-i">
//         By submitting this information you agree to our
//         <span classNameName="text-style-1">Term of Service</span>and
//         <span classNameName="text-style-2">Privacy Policy</span>
//       </span>
//     </div>
//     <div classNameName="Rectangle-2-Copy-10">
//       <span classNameName="Submit" onClick={submitHandler}>
//         Continue
//       </span>
// {open && (
//   <ThankYou
//     openThank={openThank}
//     handleCloseThank={handleCloseThank}
//   />
// )}
//     </div>
//   </div>
// </Dialog>

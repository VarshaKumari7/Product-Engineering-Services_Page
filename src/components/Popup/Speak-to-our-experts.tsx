import * as React from "react";
import "../Popup/popup.scss";
import ReactDOM from "react-dom";
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
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    contactMethod: "",
  });

  const handleInputChange = <T extends HTMLInputElement | HTMLSelectElement>(
    e: React.ChangeEvent<T>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = () => {
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      service: "",
      contactMethod: "",
    });
  };

  const portalContainer = document.getElementById("portalModalDiv");
  if (!portalContainer) {
    console.error("Portal container not found in the DOM");
    return null;
  }

  return ReactDOM.createPortal(
    // <Dialog open={open} onClose={handleClose}>
    //   {/* <DialogTitle> */}
    //   <div className="Rectangle-1">
    //     <div className="headings">
    //       <span className="Speak-To-Our-Experts">Speak To Our Experts</span>
    //       <img src={require("../Popup/cancel.png")} onClick={handleClose} />
    //     </div>
    //     <span className="Please-fill-the-form">
    //       Please fill the form below.
    //     </span>
    //     <div className="body-content">
    //       <div className="Full-Name">Full Name</div>
    //       <TextField
    //         variant="standard"
    //         type="text"
    //         value={formData.full_name}
    //         name="full_name"
    //         onChange={handleInputChange}
    //       />
    //       <div className="Phone-Number">Phone Number</div>
    //       <TextField
    //         variant="standard"
    //         type="text"
    //         value={formData.phone_number}
    //         name="phone_number"
    //         onChange={handleInputChange}
    //       />
    //       <div className="Work-Email-Address">Work Email Address</div>
    //       <TextField
    //         variant="standard"
    //         type="text"
    //         value={formData.work_email_address}
    //         name="work_email_address"
    //         onChange={handleInputChange}
    //       />
    //       <div className="Company-Name">Company Name</div>
    //       <TextField
    //         variant="standard"
    //         type="text"
    //         value={formData.company_name}
    //         name="company_name"
    //         onChange={handleInputChange}
    //       />
    //       <div className="Select-Services">Select Services</div>
    //       <TextField
    //         variant="standard"
    //         type="text"
    //         value={formData.select_services}
    //         onChange={handleInputChange}
    //         name="select_services"
    //       />
    //       <div className="Company-Name">Your Timeline</div>
    //       <TextField
    //         variant="standard"
    //         type="text"
    //         value={formData.your_timeline}
    //         name="your_timeline"
    //         onChange={handleInputChange}
    //       />
    //       <div className="Services">
    //         <span className="How-can-we-contact-y">
    //           How can we contact you?
    //         </span>
    //         <TextField
    //           variant="standard"
    //           type="text"
    //           select
    //           onChange={handleInputChange}
    //           name="contact"
    //         >
    //           {Services.map((option) => (
    //             <MenuItem key={option.value} value={option.value}>
    //               {option.value}
    //             </MenuItem>
    //           ))}
    //         </TextField>
    //       </div>

    //       <div className="Rectangle-2-Copy-11">
    //         <input type="checkbox" />

    //         <span className="By-submitting-this-i">
    //           <span>By submitting this information you agree to our </span>
    //           <span className="text-style-1">Term of Service</span>
    //           <span> and </span>
    //           <span className="text-style-2">Privacy Policy</span>
    //         </span>
    //       </div>
    //       <div className="Rectangle-2-Copy-10">
    //         <span className="Submit" onClick={submitHandler}>
    //           Submit
    //         </span>
    //       </div>
    //       <div className="last-content-popup">
    //         <img src={require("../Popup/lock.png")} />
    //         <span className="The-information-shar">
    //           The information shared above will help us get back to you.
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   {/* </DialogTitle> */}
    // </Dialog>
    <>
      <div className="Rectangle-1">
        <div className="modal fade" id="formModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content try-free">
              <div className="headings">
                <h4 className="Speak-To-Our-Experts">Speak To Our Experts</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  &times;
                </button>
              </div>
              <div className="body-content">
                <form action="javascript:void(0);" id="fileUploadForm">
                  <input
                    className="Full-Name"
                    type="text"
                    required
                    name="name"
                    placeholder="Full Name"
                    onChange={handleInputChange}
                    value={formData.name}
                  />
                  <input
                    className="Phone-Number"
                    type="text"
                    required
                    name="phone"
                    placeholder="Phone Number"
                    pattern="^[0-9]*$"
                    onChange={handleInputChange}
                    value={formData.phone}
                  />
                  <input
                    value={formData.email}
                    className="Work-Email-Address"
                    type="text"
                    name="email"
                    pattern="^([w-.]+@([w-]+.)+[w-]{2,4})?$"
                    placeholder="Work Email Address"
                    onChange={handleInputChange}
                  />
                  <input
                    className="Company-Name"
                    type="text"
                    required
                    name="company"
                    placeholder="Company Name"
                    onChange={handleInputChange}
                    value={formData.company}
                  />
                  <select
                    name="service"
                    required
                    id=""
                    className="Select-Services"
                    onChange={handleInputChange}
                    value={formData.service}
                  >
                    <option>Select Service</option>
                    <option value="IOS App Development">
                      IOS App Development{" "}
                    </option>
                    <option value="Android App Development">
                      Android App Development
                    </option>
                    <option value="React Native Development">
                      React Native Development
                    </option>
                    <option value="Hybrid Web App Development">
                      Hybrid Web App Development
                    </option>
                    <option value="Progressive Web Apps (PWA)">
                      Progressive Web Apps (PWA)
                    </option>
                    <option value="Wearables & Embedded Softwares">
                      Wearables & Embedded Softwares
                    </option>
                  </select>
                  <select
                    name="contactMethod"
                    placeholder="How can we contact you?"
                    id=""
                    className="How-can-we-contact-y"
                    onChange={handleInputChange}
                    value={formData.contactMethod}
                  >
                    <option>How can we contact you?</option>
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                  </select>
                  <div className="terms-privacy">
                    <input type="checkbox" id="privacyAccept" />
                    <p>
                      By submitting this information you agree to our{" "}
                      <span style={{ color: "#0f0a4b" }}>Term of Service </span>
                      and{" "}
                      <span style={{ color: "#0f0a4b" }}>Privacy Policy</span>
                    </p>
                  </div>
                  <div className="Rectangle-2-Copy-10">
                    <button
                      type="submit"
                      className="btn btn-free Submit"
                      id="btnSubmit"
                      onClick={submitHandler}
                    >
                      Submit
                    </button>
                  </div>

                  <div className="last-content-popup">
                    <img
                      src={require("../Popup/lock.png")}
                      alt=""
                      className="mobile-image"
                    />
                    <p className="The-information-shar">
                      The information shared above will help us get back to you.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    portalContainer
  );
};

export default SpeakToOurExperts;

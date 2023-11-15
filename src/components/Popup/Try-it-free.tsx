import React from "react";
import "../Popup/popup.scss";
// import Dialog from "@mui/material/Dialog";
// import { DialogTitle, MenuItem, TextField } from "@mui/material";
// interface Props {
//   open?: boolean;
//   handleClose?: any;
// }

// const TryItFree = ({ open, handleClose }: any) => {
// const [formData, setFormData] = React.useState({
//   full_name: "",
//   phone_number: "",
//   work_email_address: "",
//   company_name: "",
//   select_services: "",
//   contact: "",
//   your_timeline: "",
//   how_can_we_contact_you: "",
//   comment: "",
// });

// const Services = [
//   {
//     value: "Mobile App development",
//     label: "$",
//   },
//   {
//     value: "App development",
//     label: "฿",
//   },
//   {
//     value: "web development",
//     label: "¥",
//   },
// ];
// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({ ...prevData, [name]: value }));
// };

// const submitHandler = () => {
//   console.log("Form Data:", formData);
//   setFormData({
//     full_name: "",
//     phone_number: "",
//     work_email_address: "",
//     company_name: "",
//     select_services: "",
//     contact: "",
//     your_timeline: "",
//     how_can_we_contact_you: "",
//     comment: "",
//   });
// };
//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <div classNameName="Rectangle-1">
//         <div classNameName="headings">
//           <span classNameName="Try-Free-Pilot-For-1">
//             Try Free Pilot For 15 Days
//           </span>
//           <img src={require("../Popup/cancel.png")} onClick={handleClose} />
//         </div>
//         <div classNameName="body-content">
//           <div classNameName="Full-Name">Full Name</div>
//           <TextField
//             variant="standard"
//             type="text"
//             value={formData.full_name}
//             name="full_name"
//             onChange={handleInputChange}
//           />
//           <div classNameName="Phone-Number">Phone Number</div>

//           <TextField
//             variant="standard"
//             type="text"
//             value={formData.phone_number}
//             name="phone_number"
//             onChange={handleInputChange}
//           />
//           <div classNameName="Work-Email-Address">Work Email Address</div>

//           <TextField
//             variant="standard"
//             type="text"
//             value={formData.work_email_address}
//             name="work_email_address"
//             onChange={handleInputChange}
//           />
//           <div classNameName="Company-Name">Company Name</div>

//           <TextField
//             variant="standard"
//             type="text"
//             value={formData.company_name}
//             name="company_name"
//             onChange={handleInputChange}
//           />
//           <div classNameName="Services">
//             <span classNameName="Select-Services">Select Services</span>
//             <TextField
//               variant="standard"
//               type="text"
//               select
//               onChange={handleInputChange}
//               name="select_services"
//             >
//               {Services.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.value}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>
//           <div classNameName="Your-Timeline"> Comment</div>

//           <TextField
//             variant="standard"
//             type="text"
//             value={formData.comment}
//             name="comment"
//             onChange={handleInputChange}
//           />
//           <div classNameName="Services">
//             <span classNameName="How-can-we-contact-y">
//               How can we contact you?
//             </span>
//             <TextField
//               variant="standard"
//               type="text"
//               select
//               onChange={handleInputChange}
//               name="contact"
//             >
//               {Services.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.value}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>
//         </div>
//         <div classNameName="Rectangle-2-Copy-11">
//           <input type="checkbox" />
//           <div classNameName="By-submitting-this-i">
//             <span>By submitting this information you agree to our </span>
//             <span classNameName="text-style-1">Term of Service</span>
//             <span> and </span>
//             <span classNameName="text-style-2">Privacy Policy</span>
//           </div>
//         </div>
//         <div classNameName="Rectangle-2-Copy-10">
//           <span classNameName="Submit" onClick={submitHandler}>
//             Try Now For Free
//           </span>
//         </div>
//         <div classNameName="last-content-popup">
//           <img src={require("../Popup/lock.png")} />
//           <span classNameName="The-information-shar">
//             The information shared above will help us get back to you.
//           </span>
//         </div>
//       </div>
//     </Dialog>
//   );
// };

// export default TryItFree;

const TryItFree = ({ open, handleClose }: any) => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    contactMethod: "",
    comment: "",
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
      comment: "",
    });
  };
  return (
    <div className="Rectangle-try">
      <div className="modal fade" id="formModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="headings">
              <h4 className="Speak-To-Our-Experts">
                Try Free Pilot For 15 Days
              </h4>
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
                />
                <input
                  className="Phone-Number"
                  type="text"
                  required
                  name="phone"
                  placeholder="Phone Number"
                  pattern="^[0-9]*$"
                  onChange={handleInputChange}
                />
                <input
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
                <input
                  className="Comment"
                  type="text"
                  required
                  name="comment"
                  placeholder="Comment"
                  onChange={handleInputChange}
                />
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
                    and <span style={{ color: "#0f0a4b" }}>Privacy Policy</span>
                  </p>
                </div>
                <div className="Rectangle-2-Copy-10">
                  <button
                    type="submit"
                    className="btn btn-free Submit"
                    id="btnSubmit"
                    onClick={submitHandler}
                  >
                    Try Now For Free
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
  );
};
export default TryItFree;
//  <div className="Rectangle-1">
//         <div className="headings">
//           <span className="Try-Free-Pilot-For-1">
//             Try Free Pilot For 15 Days
//           </span>
//           <img src="cancel.png" alt="Cancel" />
//         </div>
//         {/* <!-- Other content goes here --> */}
//         {/* <!-- ... (previous content) ... --> */}
//         <div className="body-content">
//           <div className="Full-Name">Full Name</div>
//           <input
//             className="input-field"
//             type="text"
//             value=""
//             name="full_name"
//           />

//           <div className="Phone-Number">Phone Number</div>
//           <input
//             className="input-field"
//             type="text"
//             value=""
//             name="phone_number"
//           />

//           <div className="Work-Email-Address">Work Email Address</div>
//           <input
//             className="input-field"
//             type="text"
//             value=""
//             name="work_email_address"
//           />

//           <div className="Company-Name">Company Name</div>
//           <input
//             className="input-field"
//             type="text"
//             value=""
//             name="company_name"
//           />

//           <div className="Services">
//             <span className="Select-Services">Select Services</span>
//             <select className="select-field" name="select_services">
//               <option value="Mobile App development">
//                 Mobile App development
//               </option>
//               <option value="App development">App development</option>
//               <option value="web development">web development</option>
//             </select>
//           </div>

//           <div className="Your-Timeline"> Comment</div>
//           <input className="input-field" type="text" value="" name="comment" />

//           <div className="Services">
//             <span className="How-can-we-contact-y">
//               How can we contact you?
//             </span>
//             <select className="select-field" name="contact">
//               <option value="Mobile App development">
//                 Mobile App development
//               </option>
//               <option value="App development">App development</option>
//               <option value="web development">web development</option>
//             </select>
//           </div>
//         </div>
//         {/* <!-- ... (remaining content) ... --> */}

//         {/* <!-- ... (previous content) ... --> */}
//         <div className="Rectangle-2-Copy-11">
//           <input type="checkbox" />
//           <div className="By-submitting-this-i">
//             <span>By submitting this information you agree to our </span>
//             <span className="text-style-1">Term of Service</span>
//             <span> and </span>
//             <span className="text-style-2">Privacy Policy</span>
//           </div>
//         </div>
//         <div className="Rectangle-2-Copy-10">
//           <span className="Submit" onClick={submitHandler}>
//             Try Now For Free
//           </span>
//         </div>
//         <div className="last-content-popup">
//           <img src="lock.png" alt="Lock" />
//           <span className="The-information-shar">
//             The information shared above will help us get back to you.
//           </span>
//         </div>
//       </div>

//       <div className="last-content-popup">
//         <img src="lock.png" alt="Lock" />
//         <span className="The-information-shar">
//           The information shared above will help us get back to you.
//         </span>
//       </div>

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
    <>
      <div className="form-modal-for-expert">
        <div className="modal fade Rectangle-1" id="formModal" role="dialog">
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

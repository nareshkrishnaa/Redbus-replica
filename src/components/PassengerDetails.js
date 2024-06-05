import React from "react";
import "./PassengerDetails.scss";
import { useState } from "react";

const PassengerDetails = () => {
  const [gender, setGender] = useState("");

  return (
    <div className="custinfo slidein d-none">
      <h4 className="passenger-maintitle">Passenger Details</h4>
      <div className="sc-gVLVqr gPIIcx">
        <img
          src="/images/reviews/logo-555-yellow-white.svg"
          alt="Primo"
          className="sc-cBdUnI oUNMD"
        />
        <div className="sc-exkUMo nrqDe">
          <p className="sc-kcDeIU eHrLVD">A Rising Star on redBus</p>
          <p className="sc-BngTV fqiIWy">
            On time | Friendly staff | Top rated
          </p>
        </div>
        <span className="sc-bFADNz cBxkyr">
          <i className="bi bi-x icon-close"></i>
        </span>
      </div>
      <div className="custinfo_container">
        <div className="primo_custinfo">
          <div className="d-flex flex-column">
            <div className="passenger_info_title mb-0 pb-0">
              <i className="bi bi-person-circle icon-profileIcon fl"></i>
              <span className="fl p-title">Passenger Information</span>
            </div>
            <div className="gradient-divider mt-0 mb-3"></div>
            <div className="passenger_info_content_block">
              <div className="passenger_sub_title">
                <span className="passenger_priority">Passenger 1</span>
                <span className="passenger_seat">
                  <span className="passenger_seatno f-bold">Seat L6</span>
                </span>
              </div>
              <div className="passenger_outer_container w-100 mt-2">
                <div className="input_block">
                  <label className="custinfo_label" htmlFor="seatno-04">
                    Name
                    <input
                      className="input_box"
                      type="text"
                      pattern="/^([A-Za-z\u00E9\u00E0\u00EB\u00E1\u00ED\u00F3\u00FA\u00FC\u00F1\u00BF\u00A1\s+]{1,40}?)+$/"
                      placeholder="Name"
                      data-validation-msg="Please enter valid Name"
                      name="Name_0"
                      maxLength="300"
                      id="seatno-04"
                    />
                  </label>
                  <span
                    id="seatno04"
                    className="hide"
                    data-seaterrmsg="seatno04"
                  >
                    Please enter valid Name
                  </span>
                </div>
              </div>
              <div className="combined_block d-flex justify-content-between">
                <div className="radio_block">
                  <span className="radio_block_title">Gender</span>
                  <div className="form-group">
                    <div className="d-flex gap-3">
                      <div className="me-3">
                        <div className="gender_position_abs"></div>
                        <input
                          type="radio"
                          id="23_0"
                          name="Gender0"
                          value="Female"
                          checked={gender === "Female"}
                          onChange={() => setGender("Female")}
                        />
                        <label className="radio_css" htmlFor="23_0">
                          Female
                        </label>
                      </div>
                      <div className="ms-3">
                        <div className="gender_position_abs"></div>
                        <input
                          type="radio"
                          id="23_1"
                          name="Gender0"
                          value="Male"
                          checked={gender === "Male"}
                          onChange={() => setGender("Male")}
                        />
                        <label className="radio_css" htmlFor="23_1">
                          Male
                        </label>
                      </div>
                    </div>
                  </div>
                  <span
                    id="seatno02"
                    className="hide"
                    data-seaterrmsg="seatno02"
                  >
                    Please select valid gender
                  </span>
                </div>
                <div className="age_div d-flex flex-column">
                  <div>
                    <label className="age_label">Age</label>
                  </div>
                  <div className="mt">
                    <input
                      className="input_box_age"
                      type="number"
                      placeholder="Age"
                    />
                  </div>
                </div>
              </div>
              <div className="stateBlock mb-2">
                <label className="byWhSt">State of Residence*</label>
                <div>
                  <select className="form-select" id="inputGroupSelect01">
                    <option value="" disabled>
                      Select a state
                    </option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN" selected>
                      Tamil Nadu
                    </option>
                    <option value="TG">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="UT">Uttarakhand</option>
                    <option value="WB">West Bengal</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="CH">Chandigarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="DL">Delhi</option>
                    <option value="PY">Puducherry</option>
                    <option value="LA">Ladakh</option>
                  </select>
                </div>
              </div>
              <div className="gradient-divider mt-3 mb-2"></div>
              <div className="passenger_info_title mb-2 pb-0 d-flex">
                <div className="icon-circle">
                  <i className="bi bi-envelope envelope_icon"></i>
                </div>
                <span className="p-title ms-2">Contact Information</span>
              </div>
              <div className="gradient-divider mt-0 mb-3"></div>
              <div className="passenger_contact_msg">
                Your ticket will be sent to these details
              </div>
              <div className="input_block">
                <label className="custinfo_label" htmlFor="email_id">
                  Email ID
                  <input
                    className="input_box"
                    type="text"
                    pattern="/^([A-Za-z\u00E9\u00E0\u00EB\u00E1\u00ED\u00F3\u00FA\u00FC\u00F1\u00BF\u00A1\s+]{1,40}?)+$/"
                    placeholder="Email ID"
                    data-validation-msg="Please enter valid email id"
                    name="Email_0"
                    maxLength="300"
                    id="email_id"
                  />
                </label>
                <span
                  id="email_error"
                  className="hide"
                  data-seaterrmsg="email_error"
                >
                  Please enter valid Email ID
                </span>
              </div>
              <div className="d-flex">
                <div className="input_block mt-4">
                  <label className="custinfo_label" htmlFor="phone_number">
                    Phone Number
                  </label>
                  <div className="d-flex">
                    <div className="form-group">
                      <select className="input_box_cc" id="countryCodeSelect">
                        <option value="+1">United States (+1)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+91" selected>
                          India (+91)
                        </option>
                        <option value="+61">Australia (+61)</option>
                        <option value="+81">Japan (+81)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+33">France (+33)</option>
                        <option value="+86">China (+86)</option>
                        <option value="+55">Brazil (+55)</option>
                        <option value="+27">South Africa (+27)</option>
                      </select>
                    </div>
                    <div>
                      <input
                        className="input_box"
                        type="text"
                        placeholder="Phone Number"
                        data-validation-msg="Please enter valid phone number"
                        maxLength="14"
                        id="phone_number"
                      />
                      <span
                        id="phone_error"
                        className="hide"
                        data-seaterrmsg="phone_error"
                      >
                        Please enter valid mobile number
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gradient-divider mt-3 mb-2"></div>
              <div className="whatsApp_block">
                <label className="checkbox_css">
                  <input
                    type="checkbox"
                    className="input-checkbox checkmark"
                    defaultChecked
                  />
                  <i className="bi bi-whatsapp icon-whatsApp ms-3 me-3"></i>
                  <span className="subscribe-txt">
                    Send booking details and trip updates on WhatsApp
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="pptnc-link">
          By clicking on proceed, I agree that I have read and understood the
          <a
            href="/info/termscondition"
            target="_blank"
            rel="noopener noreferrer"
          >
            TnCs
          </a>{" "}
          and the
          <a
            href="/info/privacypolicy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
        <div className="tamt">Total Amount: INR 1204.4</div>
        <div className="ptpay">Proceed to pay</div>
      </div>
    </div>
  );
};

export default PassengerDetails;

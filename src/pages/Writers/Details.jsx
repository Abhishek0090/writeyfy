import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import OtpInput from "react-otp-input";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import generateOTP from "~/utils/otpgenerator";
import axios from "axios";
import { Checkmark } from "react-checkmark";
import toast, { Toaster } from "react-hot-toast";
import { setRegisterData } from "~/features/redux/registerSlice/RegisterSlice";

const getEmailOTP = () => toast(` Your OTP is ${generateOTP()}`);
const getMobileOTP = () => toast(` Your OTP is ${generateOTP()}`);

const verifying = (data) =>
  toast.promise(saveSettings(data), {
    loading: "Verifying...",
    success: <b>{data}!</b>,
    error: <b>Otp Not Verified.</b>,
  });

const saved = () => toast.success("Successfully Submitted!");

const Details = ({ currentStep, steps }) => {
  ////// fetch Data from Redux ///////

  const dispatch = useDispatch();

  const { technical_drawing } = useSelector(
    (state) => state.writers.technicalDrawingFormData
  );
  const { art } = useSelector((state) => state.writers.artCraftFormData);
  const { ppt } = useSelector((state) => state.writers.pptFormData);
  const { writer } = useSelector((state) => state.writers.handwrittenFormData);

  const {
    firstName,
    lastName,
    email,
    number,
    date_of_birth,
    whatsapp_number,
    qualification,
    occupation,
    bio,
    city,
    state,
    country,
    country_code,
    pin_code,
    profile_pic,
    bank_name,
    account_number,
    ifsc_code,
    branch_code,
    beneficiary_name,
    pan_number,
  } = useSelector((state) => state.register.registerData);

  /////////// <---- Profile Upload ----> /////////

  const [profileFile, setProfileFile] = useState(null);

  const onFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      setProfileFile(file);
    }
  };

  ///// <---- Date ----> /////

  const [startDate, setStartDate] = useState(Date.now());

  const [AlreadyCountry, setCountry] = useState("India");

  const [contact, setContact] = useState();

  ///////////////////// <----- Data -------> //////////////////

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    date_of_birth: "",
    whatsapp_number: "",
    qualification: "",
    occupation: "",
    bio: "",
    city: "",
    state: "",
    country: "",
    country_code: "",
    pin_code: "",
    profile_pic: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    branch_code: "",
    beneficiary_name: "",
    pan_number: "",
    writing: writer,
    technical_drawing: technical_drawing,
    ppt: ppt,
    art: art,
  };

  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);

  /////////////<------- OTP Verification ------------>////////////////

  const [otpEmail, setOtpEmail] = useState(null);

  const [otpMobile, setOtpMobile] = useState(null);

  const [verifyEmail, setVerifyEmail] = useState(false);
  const [verifyMob, setVerifyMob] = useState(false);

  const [ResendOtp, setResendOtp] = useState(false);

  const [ResendMobOtp, setResendMobOtp] = useState(false);

  const InsertEmailOtp = async () => {
    const { email } = data;

    const otp = parseInt(otpEmail);

    const newData = {
      email: email,
      otp: otpEmail,
    };

    console.log(newData);

    // if (newData.email && newData.otp) {
    try {
      const verifyRes = await axios.post(
        "http://localhost:5000/verify/getemailotp",
        newData
      );
      console.log(verifyRes);
    } catch (error) {
      console.log("Otp Insertion Failed");
    }
    // }
  };

  const MatchEmailOtp = async () => {
    const { email } = data;

    // const otp = parseInt(otpEmail);

    // const newData = {
    //   email: email,
    //   otp: otpEmail,
    // };

    // try {
    //   const res = await axios.get("http://localhost:5000/verify/verifyemail", {
    //     email,
    //     otpEmail,
    //   });

    //   console.log(res)
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  const InsertMobileOtp = async () => {
    const { number } = data;

    const otp = parseInt(otpMobile);

    const newData = {
      number: number,
      otp: otpMobile,
    };

    console.log(newData);

    // if (newData.email && newData.otp) {
    try {
      const verifyRes = await axios.post(
        "http://localhost:5000/verify/getmobileotp",
        newData
      );
      console.log(verifyRes);
    } catch (error) {
      console.log("Otp Insertion Failed");
    }
    // }
  };

  const MatchMobileOtp = async () => {
    const { number } = data;

    const otp = parseInt(otpMobile);

    const newData = {
      number: number,
      otp: otpMobile,
    };

    try {
      const res = await axios.get("http://localhost:5000/verify/verifyMobile", {
        number,
        otpMobile,
      });

      console.log(res);

      console.log("Bruh");
    } catch (error) {
      console.log(error.message);
    }
  };

  /////////// <----- FormSubmit ------> //////////////

  const formSubmit = async (e) => {
    e.preventDefault();

    console.log("form");

    const newFormData = {
      ...data,
    };

    let profile_pic;

    // if there is an file
    if (profileFile) {
      const data = new FormData();
      const fileName = Date.now() + profileFile.name;
      data.append("name", fileName);
      data.append("file", profileFile);
      newFormData.profile_pic = fileName;

      console.log(profile_pic);

      try {
        const response = await axios.post(
          "http://localhost:5000/upload/profile",
          data
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      dispatch(setRegisterData(newFormData));
      saved();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      {currentStep == 2 && (
        <div>
          <div className="flex flex-wrap -mx-3 mb-6 justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0   ">
              <label
                className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                id="grid-first-name"
                type="text"
                name="email"
                placeholder="Enter Your Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={handleChange}
                value={email ? email : data.email}
              />

              <div className="flex flex-col items-center gap-3">
                <OtpInput
                  value={otpEmail}
                  onChange={(otpEmail) => setOtpEmail(otpEmail)}
                  name="email_otp"
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    outline: "none",
                    height: "45px",
                    width: "45px",
                    borderRadius: "5px",
                    background: "none",
                    border: "1px solid gray",
                  }}
                />

                {!verifyEmail ? (
                  <button
                    className="button text-sm"
                    onClick={() => {
                      getEmailOTP();
                      setVerifyEmail(true);
                    }}
                  >
                    Send Otp
                  </button>
                ) : (
                  !ResendOtp && (
                    <div className="flex gap-4">
                      <button
                        className="button text-sm"
                        onClick={() => {
                          InsertEmailOtp();
                          MatchEmailOtp();
                        }}
                      >
                        Verify
                      </button>

                      <button
                        className="text-sm text-blue-400"
                        onClick={() => {
                          getEmailOTP();
                          setResendOtp(true);
                        }}
                      >
                        Resend Otp
                      </button>
                    </div>
                  )
                )}

                {ResendOtp && (
                  <div className="flex gap-4">
                    <button
                      className="button text-sm"
                      onClick={() => {
                        InsertEmailOtp();
                        MatchEmailOtp();
                      }}
                    >
                      Verify
                    </button>

                    <button
                      className="text-sm text-blue-400"
                      onClick={() => {
                        getEmailOTP();
                        setResendOtp(true);
                      }}
                    >
                      Resend Otp
                    </button>
                  </div>
                )}
                {/* {verifyEmail && (
                  <button className=" text-sm" disabled={true}>
                   Verified <Checkmark size="25px" />
                  </button>
                )} */}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-col  ">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Contact Number
              </label>

              <PhoneInput
                country={"in"}
                value={number ? number : data.number}
                name="contact"
                onChange={(phone, country) => {
                  data.number = phone;
                  data.country = country.name;
                  data.country_code = country.dialCode;

                  setCountry(country);
                }}
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded   leading-tight focus:outline-none  "
                inputStyle={{
                  background: "none",
                  height: "42px",
                  border: "none",
                }}
                isValid={(value, country) => {
                  if (value.match(/12345/)) {
                    return "Invalid value: " + value + ", " + country.name;
                  } else if (value.match(/1234/)) {
                    return false;
                  } else {
                    return true;
                  }
                }}
              />

              <div className="flex flex-col items-center mt-3 gap-3">
                {AlreadyCountry && (
                  <>
                    <OtpInput
                      value={otpMobile}
                      name="mobile_otp"
                      onChange={(otp) => setOtpMobile(otp)}
                      numInputs={4}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                      inputStyle={{
                        outline: "none",
                        height: "45px",
                        width: "45px",
                        borderRadius: "5px",
                        background: "none",
                        border: "1px solid gray",
                      }}
                    />

                    {!verifyMob ? (
                      <button
                        className="button text-sm"
                        onClick={() => {
                          getEmailOTP();
                          setVerifyMob(true);
                        }}
                      >
                        Send Otp
                      </button>
                    ) : (
                      !ResendMobOtp && (
                        <div className="flex gap-4">
                          <button
                            className="button text-sm"
                            onClick={() => {
                              InsertMobileOtp();
                              MatchMobileOtp();
                            }}
                          >
                            Verify
                          </button>

                          <button
                            className="text-sm text-blue-400"
                            onClick={() => {
                              getMobileOTP();
                              setResendMobOtp(true);
                            }}
                          >
                            Resend Otp
                          </button>
                        </div>
                      )
                    )}

                    {ResendMobOtp && (
                      <div className="flex gap-4">
                        <button
                          className="button text-sm"
                          onClick={() => {
                            InsertMobileOtp();
                            MatchMobileOtp();
                          }}
                        >
                          Verify
                        </button>

                        <button
                          className="text-sm text-blue-400"
                          onClick={() => {
                            getMobileOTP();
                            setResendMobOtp(true);
                          }}
                        >
                          Resend Otp
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep == 3 && (
        <div>
          <div className="flex flex-wrap -mx-3 mb-6 justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                id="grid-first-name"
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                onChange={handleChange}
                value={firstName ? firstName : data.firstName}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-last-name"
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
                onChange={handleChange}
                value={lastName ? lastName : data.lastName}
              />
            </div>
          </div>

          <div className="flex flex-wrap  justify-center -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-pin"
              >
                WhatsApp Number
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-city"
                type="text"
                maxLength={10}
                placeholder="Enter WhatsApp Number"
                onChange={handleChange}
                name="whatsapp_number"
                value={whatsapp_number ? whatsapp_number : data.whatsapp_number}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Date of Birth
              </label>

              <input
                className="bg-none outline-none h-[45px]  rounded appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="datepicker"
                type="date"
                placeholder="Enter Date"
                name="date_of_birth"
                value={date_of_birth ? date_of_birth : data.date_of_birth}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Qualification
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-city"
                type="text"
                placeholder="Enter Qualification"
                name="qualification"
                value={qualification ? qualification : data.qualification}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Occupation
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-city"
                type="text"
                name="occupation"
                placeholder="Enter Occupation"
                value={occupation ? occupation : data.occupation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-pin"
              >
                city
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-city"
                type="text"
                placeholder="Enter City"
                name="city"
                onChange={handleChange}
                value={city ? city : data.city}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                State
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-city"
                type="text"
                placeholder="Enter state"
                name="state"
                onChange={handleChange}
                value={state ? state : data.state}
              />
            </div>

            <div className="w-full md:w-1/3 px-3  mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Pin Code
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-zip"
                type="text"
                placeholder="Enter a Pin code"
                name="pin_code"
                onChange={handleChange}
                value={pin_code ? pin_code : data.pin_code}
              />
            </div>
          </div>
        </div>
      )}

      {currentStep == 4 && (
        <>
          <div className="flex flex-wrap  -mx-3 mb-6">
            <div
              className=" w-full md:w-1/3 px-3  mb-6 md:mb-0 "
              style={{ width: "100%" }}
            >
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Profile
              </label>
              <input
                className="appearance-none block w-full  bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none    "
                id="profile"
                type="file"
                name="profile"
                onChange={onFileChange}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center  -mx-3 mb-6">
            <div
              className="w-full md:w-1/3 px-3  mb-6 md:mb-0"
              style={{ width: "100%" }}
            >
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Bio
              </label>
              <textarea
                className="appearance-none block w-full  bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none h-[100px]  resize-none "
                id="grid-city"
                type="text"
                placeholder="Enter Your Bio"
                name="bio"
                onChange={handleChange}
                value={bio ? bio : data.bio}
              ></textarea>
            </div>
          </div>
        </>
      )}

      {currentStep == 5 && (
        <div>
          <div className="flex flex-wrap -mx-3 mb-6 justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Bank Name
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                id="grid-first-name"
                type="text"
                placeholder="Enter Your Bank Name"
                name="bank_name"
                onChange={handleChange}
                value={bank_name ? bank_name : data.bank_name}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Account Number
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-last-name"
                type="text"
                placeholder="Enter Your Account Number"
                name="account_number"
                onChange={handleChange}
                value={account_number ? account_number : data.account_number}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6 justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                IFSC Code
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                id="grid-first-name"
                type="text"
                placeholder="Enter Your IFSC Code"
                name="ifsc_code"
                onChange={handleChange}
                value={ifsc_code ? ifsc_code : data.ifsc_code}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Branch Code
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-last-name"
                type="text"
                placeholder="Enter Your Branch Code"
                name="branch_code"
                onChange={handleChange}
                value={branch_code ? branch_code : data.branch_code}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Beneficiary Name
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                id="grid-first-name"
                type="text"
                placeholder="Enter Beneficiary Name"
                name="beneficiary_name"
                onChange={handleChange}
                value={
                  beneficiary_name ? beneficiary_name : data.beneficiary_name
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Pan Number
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none   "
                id="grid-last-name"
                type="text"
                placeholder="Enter Your Pan Number"
                name="pan_number"
                onChange={handleChange}
                value={pan_number ? pan_number : data.pan_number}
              />
            </div>
          </div>
        </div>
      )}

      {currentStep >= steps.length && (
        <>
          <button className=" button m-auto" onClick={formSubmit}>
            Submit
          </button>
        </>
      )}
    </>
  );
};

export default Details;

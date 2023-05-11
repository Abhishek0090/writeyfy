import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import OtpInput from "react-otp-input";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Stepper from "~/utils/Stepper";
import "react-datepicker/dist/react-datepicker.css";
import generateOTP from "~/utils/otpgenerator";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { setRegisterData } from "~/features/redux/registerSlice/RegisterSlice";
import { useNavigate } from "react-router-dom";

//validation

import { useFormik } from "formik";
import * as Yup from "yup";

const getEmailOTP = () => toast(` Your OTP is ${generateOTP()}`);
const getMobileOTP = () => toast(` Your OTP is ${generateOTP()}`);

const saved = () => toast.success("Successfully Submitted!");

const Failed = () => toast.error("Something Went Wrong!");

const Details = () => {
  ////// fetch Data from Redux ///////

  const steps = [
    "General",
    "Credentials",
    "Personal Details",
    "Profile Details",
    "Bank Details",
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(2);
  const [formStepData, setFormStepData] = useState(
    JSON.parse(localStorage.getItem("form"))
  );
  const [backButtonVisible, setBackButtonVisible] = useState(false);
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

  // const initialState = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   number: "",
  //   date_of_birth: "",
  //   whatsapp_number: "",
  //   qualification: "",
  //   occupation: "",
  //   bio: "",
  //   city: "",
  //   state: "",
  //   country: "",
  //   country_code: "",
  //   pin_code: "",
  //   profile_pic: "",
  //   bank_name: "",
  //   account_number: "",
  //   ifsc_code: "",
  //   branch_code: "",
  //   beneficiary_name: "",
  //   pan_number: "",
  //   writing: writer,
  //   technical_drawing: technical_drawing,
  //   ppt: ppt,
  //   art: art,
  // };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
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

  // const [data, setData] = useState(initialState);

  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
      Failed();
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: Yup.object({
        email: Yup.string().email().required("Please enter your email"),
        email_otp: Yup.number().min(4).required("Please enter your Otp"),
        contact: Yup.number().min(4).required("Please enter your Contact"),
        mobile_otp: Yup.number().min(4).required("Please enter your Otp"),
        firstName: Yup.string().min(2).required("Please enter your First Name"),
        lastName: Yup.string().min(2).required("Please enter your Last Name"),
        whatsapp_number: Yup.number()
          .min(10)
          .required("Please enter your Whatsapp Number"),
        date_of_birth: Yup.string().required("Please enter your Date of Birth"),
        qualification: Yup.string().required("Please enter your Qualification"),
        occupation: Yup.string().required("Please enter your Occupation"),
        city: Yup.string().required("Please enter your City"),
        state: Yup.string().required("Please enter your State"),
        pin_code: Yup.string().required("Please enter your pin code"),
        profile: Yup.string().required("Upload Your Profile Picture"),
        bio: Yup.string().required("Please enter Biography"),
        bank_name: Yup.string().required("Please enter your Bank Name"),
        account_number: Yup.string().required(
          "Please enter your Account Number"
        ),
        ifsc_code: Yup.string().required("Please enter your IFSC Code"),
        branch_code: Yup.string().required("Please enter your Branch Code"),
        beneficiary_name: Yup.string().required(
          "Please enter your Beneficiary Name"
        ),
        pan_number: Yup.string().required("Please enter your Pan Number"),
      }),
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: async (values, action) => {
        const newFormData = {
          ...values,
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
          Failed();
        }

        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  const [present, setPresent] = useState(false);

  // console.log(values)

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    // navigate(-1);

    if (currentStep === 2) {
      navigate(-1);
    }
  };

  // TODO: HandleClick
  const handleClick = async (clickType) => {
    // let newStep = currentStep;
    // clickType == 'next' ? newStep++ : newStep--;

    //  Check if steps are within the boundary
    //  if (newStep > 0 && newStep <= stepArray.length) {
    //    setCurrentStep(newStep);
    //  }

    const val = Object.keys(values).length;

    console.log(val);

    if (Object.values(values).length > 0) {
      console.log("hi");
    }

    // console.log(values)

    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div
      className=" 
    rounded-2xl
    text-[#1A2421]
    backdrop-blur-lg 
    [ bg-gradient-to-b from-white/60 to-white/30 ]
    [ border-[1px] border-solid border-white border-opacity-30 ]
    [ shadow-black/70 shadow-2xl ] transition-[0.3s]   m-auto rounded-[15px] flex flex-col gap-5 p-10 max-w-4xl"
    >
      <div className="container mt-5 mb-12 horizontal">
        <Stepper steps={steps} currentStepNumber={currentStep} />
      </div>
      <div className="flex flex-col justify-center p-5">
        <>
          <div>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
          {currentStep == 2 && (
            <div>
              <div className="flex flex-wrap justify-center mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 ">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-black-700"
                    htmlFor="grid-first-name"
                  >
                    Email
                  </label>
                  <input
                    className={` rounded-xl focus:border-blue-500  block w-full px-4 py-3 mb-3 leading-tight  bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none  ${
                      errors.email && touched.email
                        ? "focus:border-red-500"
                        : "focus:border-blue-500"
                    }`}
                    id="grid-first-name"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {/* {errors.email && touched.email ? (
                    <p className="form-error text-red-500 mt-[12px]">
                      {errors.email}
                    </p>
                  ) : null} */}

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
                        className="text-sm button"
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
                            className="text-sm button"
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
                          className="text-sm button"
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
                  <button className="text-sm " disabled={true}>
                   Verified <Checkmark size="25px" />
                  </button>
                )} */}
                  </div>
                </div>
                <div className="flex flex-col w-full px-3 mb-6 md:w-1/2 md:mb-0 ">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-password"
                  >
                    Contact Number
                  </label>

                  <PhoneInput
                    country={"in"}
                    name="contact"
                    onChange={(phone, country) => {
                      data.number = phone;
                      data.country = country.name;
                      data.country_code = country.dialCode;

                      setCountry(country);
                    }}
                    className=" rounded-xl focus:border-blue-500  block w-full leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    inputStyle={{
                      background: "none",
                      height: "42px",
                      border: "none",
                    }}
                    value={values.contact}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="flex flex-col items-center gap-3 mt-3">
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
                            className="text-sm button"
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
                                className="text-sm button"
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
                              className="text-sm button"
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
              <div className="flex flex-wrap justify-center mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-black-700"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 mb-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-first-name"
                    type="text"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    value={values.contact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-last-name"
                    type="text"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-pin"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-city"
                    type="text"
                    maxLength={10}
                    placeholder="Enter WhatsApp Number"
                    name="whatsapp_number"
                    value={values.whatsapp_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-password"
                  >
                    Date of Birth
                  </label>

                  <input
                    className="rounded-xl focus:border-blue-500  bg-none outline-none h-[45px]  rounded appearance-none block w-full bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="datepicker"
                    type="date"
                    placeholder="Enter Date"
                    name="date_of_birth"
                    value={values.date_of_birth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-city"
                  >
                    Qualification
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-city"
                    type="text"
                    placeholder="Enter Qualification"
                    name="qualification"
                    value={values.qualification}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-password"
                  >
                    Occupation
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-city"
                    type="text"
                    name="occupation"
                    placeholder="Enter Occupation"
                    value={values.occupation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-pin"
                  >
                    city
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-city"
                    type="text"
                    placeholder="Enter City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-city"
                  >
                    State
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-city"
                    type="text"
                    placeholder="Enter state"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-zip"
                  >
                    Pin Code
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-zip"
                    type="text"
                    placeholder="Enter a Pin code"
                    name="pin_code"
                    value={values.pin_code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep == 4 && (
            <>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div
                  className="w-full px-3 mb-6 md:w-1/3 md:mb-0"
                  style={{ width: "100%" }}
                >
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-password"
                  >
                    Profile
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="profile"
                    type="file"
                    name="profile"
                    value={values.profile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center mb-6 -mx-3">
                <div
                  className="w-full px-3 mb-6 md:w-1/3 md:mb-0"
                  style={{ width: "100%" }}
                >
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-password"
                  >
                    Bio
                  </label>
                  <textarea
                    className="rounded-xl focus:border-blue-500  appearance-none block w-full  bg-transparent text-white-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none h-[100px]  resize-none "
                    id="grid-city"
                    type="text"
                    placeholder="Enter Your Bio"
                    name="bio"
                    value={values.bio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                </div>
              </div>
            </>
          )}

          {currentStep == 5 && (
            <div>
              <div className="flex flex-wrap justify-center mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-black-700"
                    htmlFor="grid-first-name"
                  >
                    Bank Name
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 mb-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter Your Bank Name"
                    name="bank_name"
                    value={values.bank_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-last-name"
                  >
                    Account Number
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter Your Account Number"
                    name="account_number"
                    value={values.account_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-black-700"
                    htmlFor="grid-first-name"
                  >
                    IFSC Code
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 mb-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter Your IFSC Code"
                    name="ifsc_code"
                    value={values.ifsc_code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-last-name"
                  >
                    Branch Code
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter Your Branch Code"
                    name="branch_code"
                    value={values.branch_code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-black-700"
                    htmlFor="grid-first-name"
                  >
                    Beneficiary Name
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 mb-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter Beneficiary Name"
                    name="beneficiary_name"
                    value={values.beneficiary_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide uppercase text-white-700"
                    htmlFor="grid-last-name"
                  >
                    Pan Number
                  </label>
                  <input
                    className="rounded-xl focus:border-blue-500  block w-full px-4 py-3 leading-tight bg-transparent border border-gray-300 rounded appearance-none text-white-700 focus:outline-none "
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter Your Pan Number"
                    name="pan_number"
                    value={values.pan_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
          )}

          {/* {currentStep >= steps.length && (
            <>
              <button className="m-auto button" onClick={formSubmit}>
                Submit
              </button>
            </>
          )} */}
        </>
      </div>

      <div className="flex justify-center gap-10 text-center">
        {currentStep === 1 ? (
          " "
        ) : (
          <button
            disabled={currentStep === 1}
            onClick={handleBack}
            className=" button"
          >
            <ArrowBackIosIcon /> Back
          </button>
        )}

        {currentStep >= steps.length ? (
          <>
            <button className=" button" onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
          <div className="flex justify-center gap-10 text-center">
            {backButtonVisible && currentStep === 1 ? (
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="button"
              >
                <ArrowBackIosIcon /> Back
              </button>
            ) : null}
            <button
              onClick={() => {
                handleClick("next");
              }}
              className=" button"
              disabled={present ? true : false}
            >
              <ArrowForwardIosIcon /> Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;

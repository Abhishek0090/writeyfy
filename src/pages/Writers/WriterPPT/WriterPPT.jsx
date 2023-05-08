import React, { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  FormHelperText,
  Typography,
  RadioGroup,
  Radio,
  useRadioGroup,
  styled,
  Box,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
 
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Stepper from "~/utils/Stepper";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import generateOTP from "~/utils/otpgenerator";
import axios from "axios";
import { register } from "~/features/api/RegisterRequest";
import Details from "~/pages/Writers/Details";
import { setPptFormData } from "~/features/redux/writersSlice/writersSlice";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const getEmailOTP = () => toast(` Your OTP is ${generateOTP()}`);
const getMobileOTP = () => toast(` Your OTP is ${generateOTP()}`);

const saved = () => toast("Data Saved Successfully");

const steps = [
  " General",
  "Credentials",
  "Personal Details",
  "Profile Details",
  "Bank Details",
];

const WriterPPT = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  ////////<------ Stepper Setup -------> ////////

  const [currentStep, setCurrentStep] = useState(1);
  const [formStepData, setFormStepData] = useState(
    JSON.parse(localStorage.getItem("form"))
  );
  const [backButtonVisible, setBackButtonVisible] = useState(false);

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const stepArray = [
    " General",
    "Credentials",
    "Personal Details",
    "Profile Details",
    "Bank Details",
  ];
  useEffect(() => {
    let pathname = window.location.pathname;

    if (formStepData?.indexOf(pathname) !== 0) {
      setBackButtonVisible(true);
    } else {
      setBackButtonVisible(false);
    }
  }, []);

  ////////// <----- Fetching Data from Redux ------> ///////////

  const { speed_daily, subjects, level_of_ppt, plagerized_ppt, cost, sample } =
    useSelector((state) => state.writers.pptFormData);

  ///////<-----------General Data----------->/////////

  const init = {
    speed_daily: "",
    subjects: "",
    level_of_ppt: [],
    plagerized_ppt: "",
    cost: "",
    sample: "",
    ppt: 0,
  };

  const [generalData, setGeneralData] = useState(init);

  const [multipleSelect, setMultipleSelect] = useState([]);

  const [sampleFile, setSampleFile] = useState(null);

  const uploadRef = useRef();

  const handleGeneralChange = (e) => {
    e.preventDefault();

    setGeneralData({
      ...generalData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    e.preventDefault;

    setGeneralData({ ...generalData, plagerized_ppt: e.target.value });
  };

  const handleMultipleCheck = (e) => {
    e.preventDefault;

    var selectedOption = [...multipleSelect];

    if (e.target.checked) {
      selectedOption = [...multipleSelect, e.target.value];
    } else {
      selectedOption.splice(multipleSelect.indexOf(e.target.value), 1);
    }
    setMultipleSelect(selectedOption);

    setGeneralData({
      ...generalData,
      level_of_ppt: selectedOption,
    });
  };

  console.log(generalData);

  const handleUploadSample = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      setSampleFile(file);
    }
  };

  const [value, setValue] = useState(null);

  const handleClick = async (clickType) => {
    const newFormData = {
      ...generalData,
      ppt: 1,
    };

    let sample;

    // if there is an file
    if (sampleFile) {
      const data = new FormData();
      const fileName = Date.now() + sampleFile.name;
      data.append("name", fileName);
      data.append("file", sampleFile);
      newFormData.sample = fileName;

      console.log(sample);

      try {
        const response = await axios.post(
          "http://localhost:5000/upload/sample",
          data
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    dispatch(setPptFormData(newFormData));

    let newStep = currentStep;
    clickType == "next" ? newStep++ : newStep--;

    let pathname = window.location.pathname;

    if (formStepData?.filter((el) => el === pathname) !== undefined) {
      if (formStepData.indexOf(pathname) !== formStepData.length - 1) {
        navigate(formStepData[formStepData.indexOf(pathname) + 1]);
      } else {
        setCurrentStep(newStep);
      }
    }

    // Check if steps are within the boundary
    // if (newStep > 0 && newStep <= stepArray.length) {
    //   setCurrentStep(newStep);
    // }
  };

  ///////////////////Credentials Data////////////////////////

  const [startDate, setStartDate] = useState(Date.now());

  const [country, setCountry] = useState("India");

  const [contact, setContact] = useState();

  const [otp, setOtp] = useState("");

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    date_of_birth: startDate,
    whatsapp_number: "",
    qualification: "",
    occupation: "",
    bio: "",
    city: "",
    state: "",
    country: "",
    pin_code: "",
    profile_pic: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    branch_code: "",
    beneficiary_number: "",
    pan_number: "",
    writing: 0,
    technical_drawing: 0,
    ppt: 0,
    art: 0,
  };

  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [profileFile, setProfileFile] = useState(null);

  const onFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      setProfileFile(file);
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();

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
        const response = await axios.post("http://localhost:5000/upload", data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    try { 

      const res = await register(newFormData);
      console.log(res.data);
 
      saved();
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div className="shadow-[0_9px_18px_0_rgba(0,0,0,0.2)] transition-[0.3s]   m-auto rounded-[15px] flex flex-col gap-5 p-10 max-w-4xl">
      <div className="container mt-5 mb-12 horizontal">
        <Stepper steps={stepArray} currentStepNumber={currentStep} />
      </div>
      <div className="flex flex-col justify-center p-5">
        {/* {formContent(currentStep)} */}

        {currentStep == 1 && (
          <div className="flex flex-col gap-5" id="general">
            <div className="flex flex-col gap-4 text-center">
              <Typography variant="p" className="text-lg font-bold ">
                Speed daily(slides per day)
              </Typography>

              <TextField
                name="speed_daily"
                label="Speed Daily (slides per day) *"
                variant="outlined"
                type="number"
                size="small"
                // error={Boolean(formik.touched.email && formik.errors.email)}
                // onChange={formik.handleChange}
                // value={formik.values.email}
                value={
                  generalData.speed_daily
                    ? generalData.speed_daily
                    : speed_daily
                }
                onChange={handleGeneralChange}
                placeholder="Speed Daily (slides per day) *"
              />
            </div>

            <div className="flex flex-col gap-4 text-center">
              <Typography variant="p" className="text-lg font-bold ">
                Subjects of ppt you can make
              </Typography>

              <TextField
                name="subjects"
                label="Subject Name*"
                variant="outlined"
                type="text"
                size="small"
                placeholder="Subject Name*"
                onChange={handleGeneralChange}
                value={generalData.subjects ? generalData.subjects : subjects}
              />
            </div>

            <div className="text-center">
              <Typography variant="p" className="text-lg font-bold ">
                Level of ppt you can make
              </Typography>
              <FormGroup
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="level_of_ppt"
                      value="Masters"
                      onClick={handleMultipleCheck}
                      checked={
                        generalData?.level_of_ppt
                          ? generalData?.level_of_ppt.includes("Masters")
                          : level_of_ppt?.includes("Masters")
                      }
                    />
                  }
                  label="Masters"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Bachelors"
                      name="level_of_ppt"
                      onClick={handleMultipleCheck}
                      checked={
                        generalData?.level_of_ppt
                          ? generalData?.level_of_ppt.includes("Bachelors")
                          : level_of_ppt?.includes("Bachelors")
                      }
                    />
                  }
                  label="Bachelors"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="level_of_ppt"
                      value="Phd"
                      onClick={handleMultipleCheck}
                      checked={
                        generalData?.level_of_ppt
                          ? generalData?.level_of_ppt.includes("Phd")
                          : level_of_ppt?.includes("Phd")
                      }
                    />
                  }
                  label="Phd"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="MPhil"
                  value="MPhil"
                  name="level_of_ppt"
                  onClick={handleMultipleCheck}
                  checked={
                    generalData.level_of_ppt
                      ? generalData?.level_of_ppt.includes("MPhil")
                      : level_of_ppt.includes("MPhil")
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Diploma"
                      name="level_of_ppt"
                      onClick={handleMultipleCheck}
                      checked={
                        generalData.level_of_ppt
                          ? generalData?.level_of_ppt.includes("Diploma")
                          : level_of_ppt.includes("Diploma")
                      }
                    />
                  }
                  label="Diploma"
                />
              </FormGroup>
            </div>

            <div className="text-center">
              <Typography variant="p" className="text-lg font-bold">
                Can you make less plagiarized research based ppt?
              </Typography>
              <RadioGroup style={{ display: "block", padding: "20px" }}>
                <MyFormControlLabel
                  label="Yes"
                  control={
                    <Radio
                      value="Yes"
                      name="plagiarized_ppt"
                      onClick={handleCheckbox}
                      checked={
                        generalData.plagerized_ppt
                          ? generalData.plagerized_ppt === "Yes"
                          : plagerized_ppt === "Yes"
                      }
                    />
                  }
                />
                <MyFormControlLabel
                  label="No"
                  control={
                    <Radio
                      name="plagiarized_ppt"
                      value="No"
                      onClick={handleCheckbox}
                      checked={
                        generalData.plagerized_ppt
                          ? generalData.plagerized_ppt === "No"
                          : plagerized_ppt === "No"
                      }
                    />
                  }
                />
              </RadioGroup>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Typography variant="p" className="text-lg font-bold">
                Cost Per Slide
              </Typography>

              <TextField
                label="Cost in Rs*"
                variant="outlined"
                value={generalData.cost ? generalData.cost : cost}
                name="cost"
                type="number"
                size="fullWidth"
                onChange={handleGeneralChange}
              />
            </div>

            <Grid
              item
              xs={12}
              className="flex flex-col items-center justify-center w-full p-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-30 hover:bg-gray-100"
              onClick={() => uploadRef.current.click()}
            >
              {sampleFile ? (
                <Grid className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Typography variant="p" className="text-center">
                    <CloudUploadIcon />
                    Add more files upto 5 (Can Upload Multiple Files)
                    <br />
                    PDF,DOC,DOCS,ZIP,etc up to 10MB
                  </Typography>
                  <input
                    type="file"
                    name="sample"
                    ref={uploadRef}
                    onChange={handleUploadSample}
                    style={{ display: "none" }}
                  />
                </Grid>
              ) : (
                <Grid className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Typography variant="p" className="text-center">
                    <CloudUploadIcon />
                    Upload Your Work Sample (Can Upload Multiple Files)
                    <br />
                    PDF,DOC,DOCS,ZIP,etc up to 10MB
                  </Typography>
                  <input
                    type="file"
                    name="sample"
                    ref={uploadRef}
                    onChange={handleUploadSample}
                    style={{ display: "none" }}
                  />
                </Grid>
              )}
            </Grid>

            {sampleFile ? (
              <Grid className="flex flex-col items-center justify-center wrap">
                <Typography
                  variant="p"
                  className="w-full text-center bg-white-400"
                >
                  <span className="w-full h-23 ">
                    {sampleFile.name ? sampleFile.name : sample}
                  </span>
                </Typography>
              </Grid>
            ) : (
              <Grid className="flex flex-col items-center justify-center wrap">
                <Typography
                  variant="p"
                  className="w-full text-center bg-white-400"
                >
                  <span className="w-full h-23 ">{sample}</span>
                </Typography>
              </Grid>
            )}
          </div>
        )}

        <Details currentStep={currentStep}  steps={steps}/>
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
            {/* <button
              className=" button"
              onClick={() => {
                formSubmit;
                handleGeneralSubmit();
              }}
            >
              Submit
            </button> */}
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
            >
              <ArrowForwardIosIcon /> Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WriterPPT;

import React from "react";
import { useEffect, useRef, useState } from "react";
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
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import generateOTP from "~/utils/otpgenerator";
import axios from "axios";
import { register } from "~/features/api/RegisterRequest";
import Details from "~/pages/Writers/Details";
import { setHandWrittenFormData } from "~/features/redux/writersSlice/writersSlice";

function valuetext(value) {
  return `${value} Rs`;
}

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

const TechnicalDrawing = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  ////////<------ Stepper Setup -------> ////////

  const [currentStep, setCurrentStep] = useState(1);
  const [formStepData, setFormStepData] = useState(
    JSON.parse(localStorage.getItem("form"))
  );
  const [backButtonVisible, setBackButtonVisible] = useState(false);

  const handleBack = () => {
    navigate(-1);

    setCurrentStep((prevStep) => prevStep - 1);

    // navigate(-1);

    // let pathname = window.location.pathname;
    // if (formStepData?.filter((el) => el === pathname) !== undefined) {
    //   if (formStepData.indexOf(pathname) !== formStepData.length - 1) {
    //     navigate(formStepData[formStepData.indexOf(pathname) + 1]);
    //   } else {
    //     // TODO: Update

    //     setCurrentStep(newStep);
    //     navigate(-1);
    //   }
    // }
  };
  const stepArray = [
    "General",
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

  //////////////<----- fetching Data from Redux --------> ////////////////

  const { writer_capacity, plus_cost, less_cost, sample } = useSelector(
    (state) => state.writers.handwrittenFormData
  );

  ///////<-----------General Data----------->/////////

  const [generalData, setGeneralData] = useState({
    writer_capacity: "",
    less_cost: "",
    plus_cost: "",
    sample: "",
    writer: 0,
  });

  const [sampleFile, setSampleFile] = useState(null);

  const uploadRef = useRef();

  const handleGeneralChange = (e) => {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value });
  };

  console.log(generalData);

  const handleUploadSample = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      setSampleFile(file);
    }
  };

  const handleClick = async (clickType) => {
    const newFormData = {
      ...generalData,
      writer: 1,
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

    dispatch(setHandWrittenFormData(newFormData));

    let newStep = currentStep;
    clickType == "next" ? newStep++ : newStep--;
    let pathname = window.location.pathname;
    if (formStepData?.filter((el) => el === pathname) !== undefined) {
      if (formStepData.indexOf(pathname) !== formStepData.length - 1) {
        navigate(formStepData[formStepData.indexOf(pathname) + 1]);
      } else {
        // TODO: Update

        // setCurrentStep(newStep);
        navigate("/writer/details");
      }
    }
    // Check if steps are within the boundary
    // if (newStep > 0 && newStep <= stepArray.length) {
    //   setCurrentStep(newStep);
    // }
  };

  return (
    <div
      className="rounded-2xl
    text-[#1A2421]
    backdrop-blur-lg 
    [ bg-gradient-to-b from-white/60 to-white/30 ]
    [ border-[1px] border-solid border-white border-opacity-30 ]
    [ shadow-black/70 shadow-2xl ]   transition-[0.3s]   m-auto rounded-[15px] flex flex-col gap-5 p-10 max-w-4xl"
    >
      <div className="container mt-5 mb-12 horizontal">
        <Stepper steps={stepArray} currentStepNumber={currentStep} />
      </div>
      <div className="flex flex-col justify-center p-5">
        {/* {formContent(currentStep)} */}
        {currentStep == 1 && (
          <div className="flex flex-col justify-center gap-8" id="general">
            <div className="flex flex-col gap-5 text-center">
              <Typography variant="p" className="text-lg font-bold">
                Writer Capacity
              </Typography>
              <TextField
                name="writer_capacity"
                label="Writing Capacity*"
                variant="outlined"
                type="number"
                fullWidth
                size="small"
                placeholder="Enter Writing Capacity*"
                onChange={handleGeneralChange}
                value={
                  generalData.writer_capacity
                    ? generalData.writer_capacity
                    : writer_capacity
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 w-30">
              <Typography variant="p" className="text-lg font-bold">
                3+ days cost
              </Typography>
              <Slider
                aria-label="3+ days cost"
                defaultValue={3}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={0.5}
                min={3}
                max={15}
                name="plus_cost"
                onChange={handleGeneralChange}
                value={
                  generalData.plus_cost ? generalData.plus_cost : plus_cost
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 w-30">
              <Typography variant="p" className="text-lg font-bold">
                Less than 3 days cost
              </Typography>
              <Slider
                aria-label="Less than 3 days cost"
                defaultValue={3}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={0.5}
                min={3}
                max={15}
                name="less_cost"
                onChange={handleGeneralChange}
                value={
                  generalData.less_cost ? generalData.less_cost : less_cost
                }
              />
            </div>

            <Grid
              item
              xs={12}
              className="flex flex-col items-center justify-center w-full p-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-30 hover:bg-gray-100"
              onClick={() => uploadRef.current.click()}
            >
              <Grid className="flex flex-col items-center justify-center pt-5 pb-6">
                <Typography variant="p" className="text-center">
                  <CloudUploadIcon />
                  {sampleFile
                    ? "Add more files upto 5 (Can Upload Multiple Files)"
                    : "Upload Your Work Sample (Can Upload Multiple Files)"}
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

        {/* <Details currentStep={currentStep} steps={stepArray} /> */}
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

        {currentStep >= stepArray.length ? (
          <>
            {/* <button
              className=" button"
              onClick={(e) => {
                formSubmit(e);
                handleGeneralSubmit(e);
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

export default TechnicalDrawing;

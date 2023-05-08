import React from "react";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import generateOTP from "~/utils/otpgenerator";
import axios from "axios"; 
import { register } from "~/features/api/RegisterRequest";
import Details from "~/pages/Writers/Details";
import { setArtCraftFormData } from "~/features/redux/writersSlice/writersSlice";

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

const steps = [
  " General",
  "Credentials",
  "Personal Details",
  "Profile Details",
  "Bank Details",
];

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

  /////////////<------- fetch Data from Redux ---------> ////////////////

  const { category_project, cost, sample } = useSelector(
    (state) => state.writers.artCraftFormData
  );

  //////////<-----------General Data----------->///////////

  const init = {
    category_project: "",
    cost: "",
    sample: "",
    art: 0,
  };

  const [generalData, setGeneralData] = useState(init);

  const [sampleFile, setSampleFile] = useState(null);

  const uploadRef = useRef();

  const handleGeneralChange = (e) => {
    e.preventDefault();

    setGeneralData({
      ...generalData,
      [e.target.name]: e.target.value,
    });
  };

  const [value, setValue] = useState();

  const handleCheckbox = (e) => {
    e.preventDefault;

    setGeneralData({ ...generalData, category_project: e.target.value });
  };

  const handleUploadSample = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      setSampleFile(file);
    }
  };

  const handleClick = async (clickType) => {
    const newFormData = {
      ...generalData,
      art: 1,
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

    dispatch(setArtCraftFormData(newFormData));

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
          <div
            className="flex flex-col items-center justify-center gap-5"
            id="general"
          >
            <div className="text-center">
              <Typography variant="p" className="text-lg font-bold">
                Which category your projects fails in?
              </Typography>
              <RadioGroup style={{ display: "block", padding: "20px" }}>
                <MyFormControlLabel
                  value="3D"
                  label="3D"
                  control={<Radio />}
                  name="category_project"
                  onClick={handleCheckbox}
                  // checked={category_project === "3D"}
                  checked={
                    generalData.category_project
                      ? generalData.category_project === "3D"
                      : category_project === "3D"
                  }
                />
                <MyFormControlLabel
                  value="2D"
                  label="2D"
                  control={<Radio />}
                  name="category_project"
                  onClick={handleCheckbox}
                  checked={
                    generalData.category_project
                      ? generalData.category_project === "2D"
                      : category_project === "2D"
                  }
                />
                <MyFormControlLabel
                  value="Sketches and water color painting"
                  label="Sketches and water color painting"
                  control={<Radio />}
                  name="category_project"
                  onClick={handleCheckbox}
                  // checked={
                  //   category_project === "Sketches and water color painting"
                  // }
                  checked={
                    generalData.category_project
                      ? generalData.category_project ===
                        "Sketches and water color painting"
                      : category_project === "Sketches and water color painting"
                  }
                />
                <MyFormControlLabel
                  value="Software based graphic designing"
                  label="Software based graphic designing"
                  control={<Radio />}
                  name="category_project"
                  onClick={handleCheckbox}
                  checked={
                    generalData.category_project
                      ? generalData.category_project ===
                        "Software based graphic designing"
                      : category_project === "Software based graphic designing"
                  }
                />
                <MyFormControlLabel
                  value="Other"
                  label="Other"
                  control={<Radio />}
                  name="category_project"
                  onClick={handleCheckbox}
                  checked={
                    generalData.category_project
                      ? generalData.category_project === "Other"
                      : category_project === "Other"
                  }
                />
              </RadioGroup>
            </div>

            <Typography variant="p" className="text-lg font-bold">
              Cost
            </Typography>

            <div>
              <TextField
                label="Cost in Rs*"
                variant="outlined"
                value={generalData.cost ? generalData.cost : cost}
                name="cost"
                onChange={handleGeneralChange}
                type="number"
                size="medium"
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
                  <CloudUploadIcon /> Upload Your Work Sample(Can Upload
                  Multiple Files)
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
                formSubmit();
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

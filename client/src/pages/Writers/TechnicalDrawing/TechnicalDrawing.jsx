import React, { useContext } from "react";
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
import "react-datepicker/dist/react-datepicker.css";
import axios, { formToJSON } from "axios";
import { register } from "~/features/api/RegisterRequest";
import Details from "~/pages/Writers/Details";
import writersSlice, {
  setTechnicalDrawingFormData,
  updateValue,
} from "~/features/redux/writersSlice/writersSlice";

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

  //////////// <-------- Fetching Data from Redux --------> ////////////////////

  const { types_of_drawing, cost, sample } = useSelector(
    (state) => state.writers?.technicalDrawingFormData
  );

  // const { types_of_drawing, cost, sample } = ReduxData;

  ///////<-----------General Data----------->/////////

  const init = {
    types_of_drawing: [],
    cost: "",
    sample: "",
    technical_drawing: 0,
  };

  const [generalData, setGeneralData] = useState(init);

  const [sampleFile, setSampleFile] = useState(null);

  const [multipleSelect, setMultipleSelect] = useState([]);

  const uploadRef = useRef();

  const handleGeneralChange = (e) => {
    e.preventDefault();
    setGeneralData({
      ...generalData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMultipleCheck = (e) => {
    e.preventDefault;

    const selectedOption = [...multipleSelect];
    const isChecked = e.target.checked;

    if (isChecked) {
      selectedOption.push(e.target.value);
    } else {
      const index = selectedOption.indexOf(e.target.value);
      if (index !== -1) {
        selectedOption.splice(index, 1);
      }
    }

    setMultipleSelect(selectedOption);
    setGeneralData({
      ...generalData,
      types_of_drawing: selectedOption,
    });
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
      technical_drawing: 1,
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

    dispatch(setTechnicalDrawingFormData(newFormData));

    let newStep = currentStep;
    clickType == "next" ? newStep++ : newStep--;

    let pathname = window.location.pathname;

    if (formStepData?.filter((el) => el === pathname) !== undefined) {
      if (formStepData.indexOf(pathname) !== formStepData.length - 1) {
        navigate(formStepData[formStepData.indexOf(pathname) + 1]);
      } else {
        setCurrentStep(newStep);
        navigate("/writer/details")
      }
    }

    console.log("hi");

    // Check if steps are within the boundary
    // if (newStep > 0 && newStep <= stepArray.length) {
    //   setCurrentStep(newStep);
    // }
  };

  /////////////////// <----Credentials Data---->////////////////////////

  return (
    <div
      className="rounded-2xl
    text-[#1A2421]
    backdrop-blur-lg 
    [ bg-gradient-to-b from-white/60 to-white/30 ]
    [ border-[1px] border-solid border-white border-opacity-30 ]
    [ shadow-black/70 shadow-2xl ] transition-[0.3s]   m-auto rounded-[15px] flex flex-col gap-5 p-10 max-w-4xl"
    >
      <div className="container mt-5 mb-12 horizontal">
        <Stepper steps={stepArray} currentStepNumber={currentStep} />
      </div>
      <div className="flex flex-col justify-center p-5">
        {/* {formContent(currentStep)} */}

        {currentStep == 1 && (
          <div className="flex flex-col gap-5" id="general">
            <div className="text-center">
              <Typography variant="p" className="text-lg font-bold ">
                Type of drawing
              </Typography>
              (Select all that apply)
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
                      name="types_of_drawing"
                      onClick={handleMultipleCheck}
                      value="Isometric Drawing"
                      defaultChecked={types_of_drawing?.includes(
                        "Isometric Drawing"
                      )}

                      // checked={
                      //   types_of_drawing?.includes("Isometric Drawing")
                      //     ? types_of_drawing?.includes("Isometric Drawing")
                      //     : generalData.types_of_drawing?.includes(
                      //         "Isometric Drawing"
                      //       )
                      // }
                    />
                  }
                  label="Isometric Drawing"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="types_of_drawing"
                      value="Orthographic Drawing"
                      onClick={handleMultipleCheck}
                      defaultChecked={types_of_drawing?.includes(
                        "Orthographic Drawing"
                      )}
                      // checked={
                      //   types_of_drawing?.includes("Orthographic Drawing")
                      //     ? types_of_drawing?.includes("Orthographic Drawing")
                      //     : generalData.types_of_drawing?.includes(
                      //         "Orthographic Drawing"
                      //       )
                      // }
                    />
                  }
                  label="Orthographic Drawing"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="types_of_drawing"
                      onClick={handleMultipleCheck}
                      value="Dimensioning"
                      defaultChecked={types_of_drawing?.includes(
                        "Dimensioning"
                      )}
                      // checked={
                      //   types_of_drawing?.includes("Dimensioning")
                      //     ? types_of_drawing?.includes("Dimensioning")
                      //     : generalData.types_of_drawing?.includes(
                      //         "Dimensioning"
                      //       )
                      // }
                    />
                  }
                  label="Dimensioning"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="types_of_drawing"
                      onClick={handleMultipleCheck}
                      value="Sectioning"
                      defaultChecked={types_of_drawing?.includes("Sectioning")}
                      // checked={
                      //   types_of_drawing?.includes("Sectioning")
                      //     ? types_of_drawing?.includes("Sectioning")
                      //     : generalData.types_of_drawing?.includes("Sectioning")
                      // }
                    />
                  }
                  label="Sectioning"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="types_of_drawing"
                      onClick={handleMultipleCheck}
                      value="Drawing Tools"
                      defaultChecked={types_of_drawing?.includes(
                        "Drawing Tools"
                      )}
                      // checked={
                      //   types_of_drawing?.includes("Drawing Tools")
                      //     ? types_of_drawing?.includes("Drawing Tools")
                      //     : generalData.types_of_drawing?.includes(
                      //         "Drawing Tools"
                      //       )
                      // }
                    />
                  }
                  label="Drawing Tools"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="types_of_drawing"
                      onClick={handleMultipleCheck}
                      value="Assembly Drawings"
                      defaultChecked={types_of_drawing?.includes(
                        "Assembly Drawings"
                      )}
                      // checked={
                      //   types_of_drawing?.includes("Assembly Drawings")
                      //     ? types_of_drawing?.includes("Assembly Drawings")
                      //     : generalData.types_of_drawing?.includes(
                      //         "Assembly Drawings"
                      //       )
                      // }
                    />
                  }
                  label="Assembly Drawings"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={handleMultipleCheck}
                      name="types_of_drawing"
                      value="Cross-Sectional Views"
                      defaultChecked={types_of_drawing?.includes(
                        "Cross-Sectional Views"
                      )}
                      // checked={
                      //   types_of_drawing?.includes("Cross-Sectional Views")
                      //     ? types_of_drawing?.includes("Cross-Sectional Views")
                      //     : generalData.types_of_drawing?.includes(
                      //         "Cross-Sectional Views"
                      //       )
                      // }
                    />
                  }
                  label="Cross-Sectional Views"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={handleMultipleCheck}
                      value="Half Sections"
                      name="types_of_drawing"
                      defaultChecked={types_of_drawing?.includes(
                        "Half Sections"
                      )}
                      // checked={
                      //   generalData.types_of_drawing?.includes("Half Sections")
                      //     ? generalData.types_of_drawing?.includes(
                      //         "Half Sections"
                      //       )
                      //     : types_of_drawing?.includes("Half Sections")
                      // }
                    />
                  }
                  label="Half Sections"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={handleMultipleCheck}
                      name="types_of_drawing"
                      value="Other"
                      defaultChecked={types_of_drawing?.includes("Other")}
                    />
                  }
                  label="Other"
                />
              </FormGroup>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Typography variant="p" className="text-lg font-bold">
                Cost
              </Typography>

              <TextField
                label="Cost in Rs*"
                variant="outlined"
                value={cost ? cost : generalData.cost}
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

        {/* <Details currentStep={currentStep} steps={steps} /> */}
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
            <button className=" button">Submit</button>
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

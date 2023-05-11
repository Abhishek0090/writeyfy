import { createSlice } from "@reduxjs/toolkit";

const writersSlice = createSlice({
  name: "writers",
  initialState: {
    handwrittenFormData: {},
    technicalDrawingFormData: {},
    artCraftFormData: {},
    pptFormData: {},
  },
  reducers: {
    setHandWrittenFormData: (state, action) => {
      state.handwrittenFormData = {
        ...state.handwrittenFormData,
        ...action.payload,
      };
    },
    setTechnicalDrawingFormData: (state, action) => {
      state.technicalDrawingFormData = {
        ...state.technicalDrawingFormData,
        ...action.payload,
      };
    },
    setArtCraftFormData: (state, action) => {
      state.artCraftFormData = {
        ...state.artCraftFormData,
        ...action.payload,
      };
    },
    setPptFormData: (state, action) => {
      state.pptFormData = {
        ...state.pptFormData,
        ...action.payload,
      };
    },
  },
});

export const {
  setHandWrittenFormData,
  setTechnicalDrawingFormData,
  setArtCraftFormData,
  setPptFormData,
  updateValue,
} = writersSlice.actions;

export default writersSlice.reducer;

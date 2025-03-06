import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assessments: [],
  loading: false,
  error: null,
};

const assessmentSlice = createSlice({
  name: "assessment",
  initialState,
  reducers: {
    setAssessments: (state, action) => {
      state.assessments = action.payload;
    },
    addAssessment: (state, action) => {
      state.assessments.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAssessments, addAssessment, setLoading, setError } = assessmentSlice.actions;
export default assessmentSlice.reducer;

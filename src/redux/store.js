import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "./features/assessmentSlice";
import assessmentsApi  from "./features/assessmentApi"; // Make sure this is created

const store = configureStore({
  reducer: {
    assessment: assessmentReducer,
    [assessmentsApi.reducerPath]: assessmentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(assessmentsApi.middleware),
});

export default store;

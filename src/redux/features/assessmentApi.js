import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/baseUrl";

const assessmentsApi = createApi({
  reducerPath: "assessmentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/assessments`, // Ensure getBaseUrl() returns a valid URL
    // credentials: "include",
  }),
  tagTypes: ["Assessments"],
  endpoints: (builder) => ({
    // Fetch all assessments
    fetchAllAssessments: builder.query({
      query: () => "/",
      providesTags: ["Assessments"],
    }),

    // Fetch assessment by ID
    getAllAssessments: builder.query({
            query: () => ({
                url: "/",
                method: "GET",
                providesTags: ['Assessment'],
            }),
            refetchOnMount:true,
            invalidatesTags: ["Assessments"],
        }),
    // Create a new assessment
    addAssessment: builder.mutation({
      query: (assessments) => ({
        url: "/create-assessment",
        method: "POST",
        body: assessments,
      }),
      invalidatesTags: ["Assessments"],
    }),

    // Update an assessment
    updateAssessment: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `/update-assessment/${id}`,
        method: "PATCH",
        body: updatedData,
        credentials: "include",
      }),
      invalidatesTags: ["Assessments"],
    }),

    // Delete an assessment
    deleteAssessment: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Assessments", id }],
    }),
  }),
});

export const {
  useGetAllAssessmentsQuery,
  useFetchAssessmentByIdQuery,
  useAddAssessmentMutation,
  useUpdateAssessmentMutation,
  useDeleteAssessmentMutation,
} = assessmentsApi;

export default assessmentsApi;

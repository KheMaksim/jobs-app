import { IVacancy } from "@/interfaces/IVacancy";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getVacancies } from "./VacancyActions";

export interface VacancyState {
    vacancies: IVacancy[];
    isLoading: boolean;
    error: null | string;
}

const initialState: VacancyState = {
    vacancies: [],
    isLoading: false,
    error: null,
};

export const VacancySlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setVacancies: (state, action: PayloadAction<IVacancy[]>) => {
            state.vacancies = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getVacancies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getVacancies.fulfilled, (state, action) => {
                state.vacancies = [...action.payload];
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getVacancies.rejected, (state) => {
                state.isLoading = false;
                state.error = "Error occurred";
            });
    },
});

export const VacancyReducer = VacancySlice.reducer;

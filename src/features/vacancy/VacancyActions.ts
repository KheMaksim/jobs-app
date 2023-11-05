import api from "@/api/api";
import { vacanciesURL } from "@/constants/apiURL";
import { IVacancy } from "@/interfaces/IVacancy";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getVacancies = createAsyncThunk<IVacancy[]>(
    "get/vacancies",
    async (_payload) => {
        const { data: vacanciesResponse } = await api.get(vacanciesURL, {
            params: {
                query: "Frontend developer",
                page: "1",
                num_pages: "1",
            },
            headers: {
                "X-RapidAPI-Key":
                    "05d64df4e4msh2ec05c6bfc9d151p14e189jsnbf1068104056",
                "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            },
        });
        const vacancies: IVacancy[] = vacanciesResponse.data;
        return vacancies;
    }
);

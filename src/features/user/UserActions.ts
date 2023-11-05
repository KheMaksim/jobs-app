import api from "@/api/api";
import { IUser } from "@/interfaces/IUser";
import userRequest from "@/interfaces/IUserRequest";
import IResponseError from "@/interfaces/IResponseError";
import IResponseValidateError from "@/interfaces/IResponseValidateError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, isAxiosError } from "axios";
import { usersURL } from "@/constants/apiURL";

export const registerUser = createAsyncThunk<
    IUser,
    userRequest,
    { rejectValue: IResponseError | IResponseValidateError }
>("auth/register", async (userData, { rejectWithValue }) => {
    try {
        const response = await api.post<IUser>(
            usersURL + "users.json",
            userData
        );
        return response.data;
    } catch (err) {
        if (isAxiosError(err)) {
            const error: AxiosError<IResponseError> = err;
            return rejectWithValue(
                error.response?.data || {
                    error: { message: "An error occurred" },
                }
            );
        }
        throw err;
    }
});

export const loginUser = createAsyncThunk<
    IUser,
    userRequest,
    { rejectValue: string }
>("auth.login", async (userData, { rejectWithValue }) => {
    try {
        const response = await api.post<IUser>(
            usersURL + "users.json",
            userData
        );
        return response.data;
    } catch (err) {
        if (isAxiosError(err)) {
            const error: AxiosError<IResponseError> = err;
            return rejectWithValue(
                error.response?.data.error.message || "Something went wrong."
            );
        }
        throw err;
    }
});

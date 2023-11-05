import { combineReducers } from "@reduxjs/toolkit";
import { UserReducer } from "../features/user/UserSlice";
import { VacancyReducer } from "@/features/vacancy/VacancySlice";

const rootReducer = combineReducers({
    user: UserReducer,
    vacancy: VacancyReducer,
});

export default rootReducer;

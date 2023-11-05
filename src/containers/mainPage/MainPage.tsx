import VacancyCard from "@/components/card/VacancyCard";
import "./MainPage.css";
import { getVacancies } from "@/features/vacancy/VacancyActions";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import imageNotAvailable from "@/assets/imageNotAvailable.png";
import Loader from "@/components/UI/loader/Loader";

const MainPage = () => {
    const vacancies = useAppSelector((state) => state.vacancy.vacancies);
    const isLoading = useAppSelector((state) => state.vacancy.isLoading);
    const dispatch = useAppDispatch();

    const getVacanciesArray = useCallback(() => {
        dispatch(getVacancies());
    }, []);

    useEffect(() => {
        getVacanciesArray();
    }, [getVacanciesArray]);

    return (
        <>
            {isLoading && <Loader />}
            <div className="vacancies">
                <div className="container">
                    {vacancies.map((vacancy, index) => {
                        return (
                            <VacancyCard
                                key={index}
                                image={
                                    vacancy.employer_logo === null
                                        ? imageNotAvailable
                                        : vacancy.employer_logo
                                }
                                title={vacancy.job_publisher}
                                subtitle={vacancy.job_title}
                                description={vacancy.job_description}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MainPage;

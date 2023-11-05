import { useParams } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import MainPage from "../mainPage/MainPage";

const Authentication = () => {
    const { pageName } = useParams();

    const render = () => {
        if (pageName === "login") return <Login />;
        else if (pageName === "register") return <Register />;
        else if (pageName === "search") return <MainPage />;
        else return <Login />;
    };

    return <>{render()}</>;
};

export default Authentication;

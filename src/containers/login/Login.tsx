import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { loginUser } from "@/features/user/UserActions";
import "./Login.css";

interface LoginState {
    username: string;
    password: string;
}

const Login = () => {
    const [state, setState] = useState<LoginState>({
        username: "",
        password: "",
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser({ ...state }))
            .unwrap()
            .then(() => {
                navigate("/search");
            });
    };

    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="headline">
                    <div className="headline__title">Вход в аккаунт</div>
                </div>

                <form className="form" onSubmit={submitFormHandler}>
                    <input
                        type="text"
                        className="form__input"
                        placeholder="Логин"
                        value={state.username}
                        onChange={inputChangeHandler}
                        name="username"
                    />
                    <input
                        type="text"
                        className="form__input"
                        placeholder="Пароль"
                        value={state.password}
                        onChange={inputChangeHandler}
                        name="password"
                    />
                    <button className="form__button">Войти</button>
                </form>

                <div className="redirect">
                    <div className="redirect__text">
                        Не имеете аккаунт?{" "}
                        <Link to={"/register"} className="redirect__link">
                            Зарегистрироваться
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

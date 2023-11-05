import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { registerUser } from "@/features/user/UserActions";
import "./Register.css";

interface RegisterState {
    username: string;
    password: string;
    confirmationPassword: string;
}

const Register = () => {
    const [state, setState] = useState<RegisterState>({
        username: "",
        password: "",
        confirmationPassword: "",
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const submitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(registerUser({ ...state }))
            .unwrap()
            .then(() => {
                navigate("/search");
            });
    };

    return (
        <div className="register">
            <div className="container">
                <div className="register__wrapper">
                    <div className="headline">
                        <div className="headline__title">Регистрация</div>
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
                            placeholder="Введите пароль"
                            value={state.password}
                            onChange={inputChangeHandler}
                            name="password"
                        />
                        <input
                            type="text"
                            className="form__input"
                            placeholder="Подтвердите пароль"
                            value={state.confirmationPassword}
                            onChange={inputChangeHandler}
                            name="confirmationPassword"
                        />
                        <button
                            className="form__button"
                            disabled={
                                state.password !== state.confirmationPassword
                            }
                        >
                            Зарегистрироваться
                        </button>
                    </form>

                    <div className="redirect">
                        <div className="redirect__text">
                            Имеете аккаунт?{" "}
                            <Link to={"/login"} className="redirect__link">
                                Войти
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

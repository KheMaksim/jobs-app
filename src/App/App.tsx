import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "@/containers/authentication/Authentication";
import Login from "@/containers/login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/:pageName" element={<Authentication />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

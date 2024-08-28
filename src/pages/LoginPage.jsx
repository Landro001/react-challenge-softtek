import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, LogIn } from "lucide-react";
import SofttekLogo from "/softtek-logo.png";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/dashboard");
        } else {
            alert("Credenciais inválidas");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
            <form onSubmit={handleLogin} className="px-6 sm:px-10 py-14 bg-gray-800 rounded-lg shadow-xl flex flex-col gap-6 w-full max-w-sm">
                <img
                    src={SofttekLogo}
                    alt="Logo da Softtek"
                    className="mx-auto mb-4 w-32 sm:w-40"
                />
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 pl-10 bg-gray-700 text-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                </div>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 pl-10 bg-gray-700 text-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full sm:w-2/3 p-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 flex items-center justify-center self-center text-sm"
                >
                    <LogIn className="mr-2" size={18} />
                    <span>Entrar</span>
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
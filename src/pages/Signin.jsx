import { useState } from "react";
import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    // State to manage email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State to manage error messages
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const response = await axios.post("https://finsync-backend.vercel.app/api/v1/user/signin", {
                username: email,
                password
            });

            // Handle success
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                navigate('/dashboard'); 
            } else {
                setError("Login failed: No token received");
            }
        } catch (error) {
            console.error("Signin failed:", error);
            setError("Signin failed: " + (error.response?.data?.message || "An error occurred"));
        }
    };

    return (
        <div className="bg-[#e0f5fd] h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox 
                        placeholder="Pankaj@gmail.com" 
                        label={"Email"} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputBox 
                        placeholder="123456" 
                        label={"Password"} 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>} {/* Display error message */}
                    <div className="pt-4">
                        <Button onClick={handleSignin} label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};

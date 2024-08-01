import { useEffect, useState } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const fetchBalance = async () => {
        try {
            const response = await axios.get("https://finsync-backend-amxr.onrender.com/api/v1/account/balance", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setBalance(response.data.balance);
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    };

    const fetchUserInfo = async () => {
        try {
            const response = await axios.get("https://finsync-backend-amxr.onrender.com/api/v1/user/profile", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setUsername(response.data.username); // Assuming username is returned as 'username'
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    useEffect(() => {
        fetchBalance();
        fetchUserInfo(); // Fetch user information when the component mounts
    }, []);

    return (
        <div>
            <Appbar username={username} /> {/* Pass username as prop */}
            <div className="m-8">
                <Balance value={balance.toLocaleString()} />
                <Users />
                <div className="mt-4">
                    <button
                        onClick={handleLogout}
                        className="bg-[#00baf2] hover:bg-gray-900 text-white px-4 py-2 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

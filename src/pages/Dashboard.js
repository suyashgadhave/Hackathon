import React from "react";
import Profile from '../components/Profile';

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full text-3xl text-white">
            <div className="my-10 bg-violet-600 rounded-2xl px-10 py-4">Dashboard</div>
            <div className="w-10/12 bg-white text-blue-900 rounded-xl">
                <Profile />
            </div>
        </div>
    );
};

export default Dashboard;
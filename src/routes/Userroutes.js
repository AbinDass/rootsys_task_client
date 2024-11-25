import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Auth from '../components/auth/Auth';
import Tasks from '../components/task/Tasks';
import { useSelector } from 'react-redux';
import Profile from '../pages/Profile';

const Userroutes = () => {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state?.user?.Tokens.accessToken);
    useEffect(() => {
        if (isAuth) {
          // If token exists, navigate to the tasks page
          navigate('/tasks');
        }
      }, [isAuth, navigate]);

  return (
    <div>
        <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/tasks" element={<Tasks />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    </div>
  )
}

export default Userroutes

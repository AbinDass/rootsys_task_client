import React, { useEffect } from "react";
import { removeUser } from "../../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state?.user?.Tokens.accessToken);

    const logOut = () => {
        dispatch(removeUser());
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);
    return (
        <div>
            <div className="w-full bg-blue-500 text-white items-center px-10 gap-5 capitalize flex h-16 justify-end">
                {isAuth ? (
                    <Link to={"/profile"}>
                        <div className="cursor-pointer">profile</div>
                    </Link>
                ) : null}
                <div className="cursor-pointer" onClick={logOut}>
                    logout
                </div>
            </div>
        </div>
    );
};

export default Navbar;

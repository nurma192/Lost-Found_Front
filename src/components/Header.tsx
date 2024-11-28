import React, {useEffect, useRef, useState} from 'react';
import MyLink from "./ui/MyLink";
import MyButton from "./ui/MyButton";
import {useAuth} from "../hooks/useAuth";
import {getUserData} from "../api/usersApi";
import {User} from "../types/userTypes";

function Header() {
    const inputRef = useRef<HTMLInputElement>(null);
    const auth = useAuth()
    const [user, setUser] = useState<User | null>(null)

    const handleFocus = (): void => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    useEffect(() => {
        if (auth.isAuthenticated) {
            getUserData(auth.token)
                .then(data => {
                    setUser(data)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [auth.isAuthenticated, auth.token]);

    useEffect(() => {
        console.log("auth",auth)
    }, [auth]);

    return (
        <header className="w-full flex justify-around items-center gap-5 py-5 text-white">
            <div className="">
                <img className="w-[205px]" src="/icons/logosCombo.svg" alt="logo"/>
            </div>
            <nav>
                <ul className="hidden sm:flex gap-4">
                    <li>
                        <MyLink className="text-black" to="/">
                            Home
                        </MyLink>
                    </li>
                    <li>
                        <MyLink className="text-black" to="/items">
                            See Item
                        </MyLink>
                    </li>
                    <li>
                        <MyLink className="text-black" to="/add-item">
                            Add Item
                        </MyLink>
                    </li>
                    <li>
                        <MyLink className="text-black" to="/support">
                            Support
                        </MyLink>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-2">
                <input ref={inputRef} type="text"
                       className=" px-2 border transition-all text-md w-[0px] border-transparent text-black focus:border-black focus:w-[300px] focus:visible "/>
                <div className="flex relative p-2 rounded-3xl transition hover:bg-neutral-200 cursor-pointer"
                     onClick={handleFocus}>
                    <img src="/icons/search.svg" alt="search"/>
                </div>
                <div className="relative p-2 rounded-3xl transition hover:bg-neutral-200 cursor-pointer">
                    <div
                        className="absolute bg-[#1560BD] rounded-3xl w-3 h-3 text-[10px] content-center flex justify-center items-center">6
                    </div>
                    <img className="w-5" src="/icons/notification.svg" alt="notification"/>
                </div>
                <MyButton color="primary" className="flex justify-center items-center h-8 px-5">
                    <img className="w-4" src="/icons/profileIcon.svg" alt="profile"/>
                    <p className="">{user?.email}</p>
                </MyButton>
            </div>
        </header>
    );
}

export default Header;

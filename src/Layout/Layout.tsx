import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
    return (
        <>
            <Header />
            <div className="w-full flex justify-center py-5">
                <Outlet />
            </div>
            <footer className="w-full flex justify-center py-5 bg-[#333] text-white">
                Footer
            </footer>
        </>
    );
}

export default Layout;

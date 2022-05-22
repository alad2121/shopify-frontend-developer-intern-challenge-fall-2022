import React from "react";
import Form from "../components/Form";
import Header from "../components/Headers/Header";

const Layout = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Header title="Fun with GPT-3"/>
            <Form/>
        </div>
    )
}

export default Layout;
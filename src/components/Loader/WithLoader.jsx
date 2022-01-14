import React from "react";
import Loader from "./Loader";

const WithLoader = ({ isLoading, ...props }) => {
    return isLoading ? <Loader /> : props.children;
};

export default WithLoader;

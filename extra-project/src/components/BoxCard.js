import React from "react";
import { useState } from "react";

export const  BoxCard = ({result, children}) => {
    return (
        <div className={`box ${result}`}>
            {children}
        </div>
    )
}
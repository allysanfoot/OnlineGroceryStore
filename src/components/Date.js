import React from "react";

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${month}/${day}/${year}`;

function SiteDate() {
    return (
        currentDate
    );
}

export default SiteDate;
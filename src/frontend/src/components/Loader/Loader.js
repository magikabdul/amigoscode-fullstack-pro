import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        width: "100%",
        display: "flex",
    },

    ldsRing: {
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        width: "80px",
        height: "80px",

        '& div': {
            boxSizing: "border-box",
            display: "block",
            position: "absolute",
            width: 64,
            height: 64,
            margin: 8,
            border: "8px solid #b0b0b0",
            borderRadius: "50%",
            animation: "$lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
            borderColor: "#b0b0b0 transparent transparent transparent",
        },

        '& div:nth-child(1)': {
            animationDelay: "-0.45s",
        },

        '& div:nth-child(2)': {
            animationDelay: "-0.3s",
        },

        '& div:nth-child(3)': {
            animationDelay: "-0.15s",
        },

    },

    '@keyframes lds-ring': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(360deg)'
        }
    }
}))

function Loader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.ldsRing}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default Loader
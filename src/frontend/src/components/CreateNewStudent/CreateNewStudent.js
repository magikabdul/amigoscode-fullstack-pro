import React from "react";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
    root: {},
}));

function CreateNewStudent() {
    const classes = useStyles();

    return(
        <Box className={classes.root}>new Student</Box>
    )
}

export default CreateNewStudent;
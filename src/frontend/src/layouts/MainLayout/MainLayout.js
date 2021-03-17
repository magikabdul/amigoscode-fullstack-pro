import React, {useState} from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import {MainMenu, StudentsTable, TeamsTable} from "../../components";

import logo from "../../assets/logo.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },

    container: {
        height: '100vh',
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e0e0e0"
    },

    header: {
        height: 48,
        backgroundColor: theme.palette.background.paper
    },

    footer: {
        width: "100%",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    logo: {
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: 48,
        height: 48,
        marginBottom: theme.spacing(1),
        borderRadius: "50%",
    },

    copyright: {
        color: theme.palette.info.main,
        fontWeight: "bold",
    },
}))

function MainLayout() {
    const [show, setShow] = useState(true)
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <MainMenu setShow={setShow}/>
            <Box className={classes.container}>
                <Box className={classes.header}/>
                {show && <StudentsTable/>}
                {!show && <TeamsTable/>}
                <Box className={classes.footer}>
                    <Box className={classes.logo}/>
                    <Typography variant={"body2"} className={classes.copyright}>
                        Amigoscode course application
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default MainLayout;
import React, {useState} from "react";
import {Box, Button, Drawer, makeStyles} from "@material-ui/core";
import clsx from "clsx";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import {MenuOptions} from "./MenuOptions";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
    },

    drawer: {
        width: drawerWidth,
    },

    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: theme.palette.info.main,
    },

    openButton: {
        backgroundColor: theme.palette.info.dark,
        '&:hover': {
            backgroundColor: theme.palette.info.dark,
        }
    },

    icon: {
        color: "white"
    },

    drawerOpen: {
        width: drawerWidth,
        overflowX: "hidden",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },

    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        }
    },
}))

function MainMenu( {setShow} ) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => setOpen(!open);

    return (
        <Box className={classes.root}>
            <Drawer
                elevation={1}
                variant={"permanent"}
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx(classes.paper, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>

                <MenuOptions setShow={setShow}/>

                <Button className={classes.openButton} onClick={toggleDrawer} disableRipple fullWidth>
                    {open ? <ChevronLeft className={classes.icon}/> : <ChevronRight className={classes.icon}/>}
                </Button>

            </Drawer>
        </Box>
    )
}

export default MainMenu;
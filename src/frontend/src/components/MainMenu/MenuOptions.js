import React from "react";
import {List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {Group, Person} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: "white",
    },

    itemIcon: {
        paddingLeft: theme.spacing(1)
    },

    icon: {
        color: "white",
    }
}))

export function MenuOptions() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem button>
                <ListItemIcon className={classes.itemIcon}>
                    <Person className={classes.icon}/>
                </ListItemIcon>
                <ListItemText primary={"Students"}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.itemIcon}>
                    <Group className={classes.icon}/>
                </ListItemIcon>
                <ListItemText primary={"Teams"}/>
            </ListItem>
        </List>
    )
}
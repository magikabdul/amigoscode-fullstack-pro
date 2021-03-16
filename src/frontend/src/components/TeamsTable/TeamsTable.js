import React from "react";
import {
    Box,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },

    title: {
        margin: theme.spacing(2),
        textTransform: "uppercase"
    },

    body: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.background.paper
    },
}))

function TeamsTable() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>Teams</Typography>

            <Box className={classes.body}>
                <TableContainer component={Paper}>
                    <Table size={"small"}>
                        <TableHead>
                            <TableRow >

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default TeamsTable;